const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
 //   id: String,
  googleId: String ,
    name: String,
    email: String,
    Location: String, //could use google auth var
//     products: [{
//         type: mongoose.Schema.Types.ObjectId,
//     ref: 'Product'
// }],
    // timestamps:true
});


const user = mongoose.model("user", userSchema);

module.exports = user;