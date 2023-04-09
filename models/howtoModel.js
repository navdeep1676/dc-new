const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var howToSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    slug: {
        type:String,
        required: true,
        index:true,
    },
    type: {
        type:String,
        required:true,
    },
    tags:{
        type:[],
        required:true,
       
    },
    author:{
        type:String,
        default:"Developer's Corner",
    },
    content:{
        type:String,
        required:true,
    },
    image: {
        type: String,
        required:true
    }
},{timestamps:true});

//Export the model
module.exports = mongoose.model('Howto', howToSchema);