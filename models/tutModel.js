const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var tutorialSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    slug: {
        type: String,
        required:true
    },
    tutorialCategory: {
        type:String,
        required:true,
    },
    tutorialCategorySlug: {
        type:String,
        required:true,
    },
    topicName:{
        type:String,
        required:true,
        unique:true,
    },
    content:{
        type:String,
        required:true,
    },
    keywords: {
       type:[],
        required:true
    }
});

//Export the model
module.exports = mongoose.model('Tutorial', tutorialSchema);