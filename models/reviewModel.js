const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var reviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true,
    },
    post:{
        type:String,
        required:true,
    },
    reviwerImage:{
        type:String,
    },
    comment:{
        type:String,
        required:true,
    },
    color: {
        type: String,
        required: true,
    }
   
},{timestamps:true});

//Export the model
module.exports = mongoose.model('Review', reviewSchema);