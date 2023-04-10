const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        index:true,
    },
    slug: {
        type: String,
        required: true  
    },
    desc:{
        type:String,
        required:true,
    },
    technology: {
        type: [],
        required:true
    },
    images:[],
    instructions:{
        type:String,
        required:true,
    },
    price: {
        type: Number,
        required: true
    }
});

//Export the model
module.exports = mongoose.model('Project', projectSchema);