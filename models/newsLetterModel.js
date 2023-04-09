const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var newsLetterSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
},{timestamps:true});

//Export the model
module.exports = mongoose.model('Newsletter', newsLetterSchema);