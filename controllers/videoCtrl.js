const Video = require("../models/videoModel");
const slugify = require("slugify");
const { cloudinaryUploadImg } = require("../utils/cloudinary");
const fs = require("fs");
const postVideo = async (req, res) => {
  console.log(req.body);
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "image");
    const newpath = await uploader(req.file.path);
    req.body.image = newpath;
    fs.unlinkSync(req.file.path);
    if (req.body.title) {
      req.body.slug = slugify(req.body.title.toLowerCase());
    }
    const postVideoData = await Video.create(req.body);
    res.json({
      status: true,
      code: "VIDEO_SUBMITTED",
      msg: "Video Uploaded Successfully!",
      data: postVideoData,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAVideo = async (req, res) => {
  const { slug } = req.params;
  try {
    const getAVideoData = await Video.findOne({ slug: slug });
    res.json({
      status: true,
      code: "VIDEO_FOUND",
      msg: "Video Found Successfully!",
      data: getAVideoData,
    });
  } catch (error) {
    res.json({
      status: false,
      code: "VIDEO_NOT_FAILED",
      msg: "Something went wrong! Please contact the site administrator.",
      error: error,
    });
  }
};
const getAllVideo = async (req, res) => {
  try {
    const getAllVideoData = await Video.find();
    res.render("video",{
      status: true,
      code: "VIDEOS_FOUND",
      msg: "Videos Found Successfully!",
      data: getAllVideoData,
    });
  } catch (error) {
    res.json({
      status: false,
      code: "VIDEOS_NOT_FOUND",
      msg: "Something went wrong! Please contact the site administrator.",
      error: error,
    });
  }
};
const deleteAVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteVideo = await Video.findByIdAndDelete(id);
    res.json({
      status: true,
      code: "VIDEOS_DELETED",
      msg: "Video Deleted Successfully!",
      data: deleteVideo,
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
    postVideo,
    getAVideo,
    getAllVideo,
    deleteAVideo,
  };
  