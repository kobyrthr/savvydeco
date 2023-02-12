/* ====== External Modules  ====== */
// Required External Modules
// all required code that is not our own

const express = require('express');
const session = require("express-session");
const passport = require('passport');
const mongoose = require('mongoose');
const methodOverride = require("method-override");
require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const bodyParser = require('body-parser')
const multer = require('multer');
const path = require('path');


/* ====== Internal Modules  ====== */
// Required Internal Modules
// all code that is our code
 

/* ====== Instanced Module  ====== */
// Create the Express app
const app = express();
// returns an object that is our server

//enabling ejs 
app.set('view engine', 'ejs');


//connect mongoDB with mongoose
require("./config/database");
const userDb = require('./models/user');
const ImageModel = require('./models/images');
//require passport
require("./config/passport");


/* ====== Routes  ====== */
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

	
/* ====== Middleware  ====== */ 
// //(app.use)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));



// Set The Storage Engine
const Storage = multer.diskStorage({
  destination: '../public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});


// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

  // Init Upload
  const upload = multer({
    storage: Storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
  }).single('testImage');



  app.post('/upload', (req, res) => { 
    upload(req, res, (err)=> {
      if(err) {
        console.log(err);
  }else {
      const newImage = new ImageModel({
        name: req.body.name,
        image:{
          data:req.file.filename,
          contentType: 'image/jpg'
        }
      })
      newImage.save()
      .then(() => res.send('Successfully uploaded')).catch(err=>console.log(err))
  }})
  })

  
// method override Middleware

app.use(
    session({
      secret: "letsgoproject2!",
      resave: false,
      saveUninitialized: true,
    })
  );


//Add passport middleware here
app.use(passport.initialize());
app.use(passport.session());


app.use('/', productRoutes);
app.use('/', indexRoutes);
app.use('/', userRoutes);



// favicon error 
app.get('/favicon.ico', function(req,res){
  res.send("404");
})


/* ====== System Variables  ====== */
const PORT = process.env.PORT || 4000; // full caps signify a config variable

/* ====== App Configuration  ====== */
// app.set

	
/* ====== Server bind  ====== */
// bind the application to the port via app.listen(number, optional function to do after bind)
app.listen(PORT, function () {
	console.log(`i'm a little server live on port http://localhost:${PORT}`);
});