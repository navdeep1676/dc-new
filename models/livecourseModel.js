const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var livecourseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        index:true,
    },
    slug:{
        type:String,
        required:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Livecourse', livecourseSchema);