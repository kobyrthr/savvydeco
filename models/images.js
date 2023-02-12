
const mongoose = require('mongoose');
 
const imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    image:
    {
        data: Buffer,
        contentType: String
    }
});
 
module.exports = ImageModel = mongoose.model('ImageModel', imageSchema)
