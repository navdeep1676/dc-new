const Tutorial = require("../models/tutModel")
const TutorialCategory=require("../models/tutorialCatModel")

const slugify = require("slugify");
const { cloudinaryUploadImg } = require("../utils/cloudinary");

const fs = require("fs");







// Post Tutorial Category
const postTutorialCategory = async (req, res) => {
    try {
        if (req.body.tutcatimage) {
            const uploader = (path) => cloudinaryUploadImg(path, "image");
            const newpath = await uploader(req.file.path);
            req.body.tutcatImage = newpath;
            fs.unlinkSync(req.file.path);
        } else {
            req.body.tutcatimage="https://www.century21albania.com/vendor/core/images/default-image.jpg"
     }
      if (req.body.title) {
        req.body.slug = slugify(req.body.title.toLowerCase());
      }
      const postTutorialCategoryData = await TutorialCategory.create(req.body);
      res.json({
        status: true,
        code: "TUTORIAL_CATEGORY_SUBMITTED",
        msg: "Tutorial Category Uploaded Successfully!",
        data: postTutorialCategoryData,
      });
    } catch (error) {
      res.json(error)
    }
  };









// Post Tutorial
const postTutorial = async (req, res) => {
  console.log(req.body);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title.toLowerCase());
    }
    const postTutorialData = await Tutorial.create(req.body);
    res.json({
      status: true,
      code: "TUTORIAL_SUBMITTED",
      msg: "Tutorial Uploaded Successfully!",
      data: postTutorialData,
    });
  } catch (error) {
    console.log(error);
  }
};


// Get A tutorial

const getATutorial = async (req, res) => {
  const { slug,type } = req.params;
  try {
      const getATutorialData = await Tutorial.findOne({ slug: slug, tutorialCategory: type });
      const tutorialsTopics = await Tutorial.find({tutorialCategory:type}).select("topicName slug tutorialCategory").sort("createdAt");
      console.log(getATutorialData);
    res.render("tutorialDetail",{
      status: true,
      code: "TUTORIAL_FOUND",
      msg: "Tutorial Found Successfully!",
        data: getATutorialData,
        tutorialsTopics
    });
  } catch (error) {
    res.json({
      status: false,
      code: "TUTORIAL_NOT_FAILED",
      msg: "Something went wrong! Please contact the site administrator.",
      error: error,
    });
  }
};
const getAllTutorialCat = async (req, res) => {
  try {
    const getAllTutorialCatData = await TutorialCategory.find();
    res.render("tutorials",{
      status: true,
      code: "TUTORIAL_CAT_FOUND",
      msg: "Tutorials Category Found Successfully!",
      data: getAllTutorialCatData,
    });
  } catch (error) {
    res.render("tutorials" ,{
      status: false,
      code: "TUTORIAL_CAT_NOT_FOUND",
      msg: "Something went wrong! Please contact the site administrator.",
      error: error,
    });
  }
};
const deleteATutorial = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTutorial = await Tutorial.findByIdAndDelete(id);
    res.json({
      status: true,
      code: "TUTORIAL_DELETED",
      msg: "Tutorial Deleted Successfully!",
      data: deleteTutorial,
    });
  } catch (error) {
    res.json({
      status: false,
      code: "VIDEOS_NOT_DELETED",
      msg: "Something went wrong! Please contact the site administrator.",
      error: error,
    });
  }
};


module.exports = {
    postTutorialCategory,
    postTutorial,
    getATutorial,
    getAllTutorialCat,
    deleteATutorial,
  };