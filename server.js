/* ====== External Modules  ====== */
// Required External Modules
// all required code that is not our own

const express = require('express');
const session = require("express-session");
const passport = require('passport');
require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;


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

//require passport
require("./config/passport");


/* ====== Routes  ====== */
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

	
/* ====== Middleware  ====== */ 
// //(app.use)
// <<<<<<< homepage
app.use(express.static('public'))
// =======
// >>>>>>> main
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

app.use('/products', productRoutes);
app.use('/', indexRoutes);
app.use('/', userRoutes);




/* ====== System Variables  ====== */
const PORT = process.env.PORT || 4000; // full caps signify a config variable

/* ====== App Configuration  ====== */
// app.set

	
/* ====== Server bind  ====== */
// bind the application to the port via app.listen(number, optional function to do after bind)
app.listen(PORT, function () {
	console.log(`i'm a little server live on port http://localhost:${PORT}`);
});