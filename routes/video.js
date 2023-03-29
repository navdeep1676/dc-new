const express = require("express");
const {
  postVideo,
  getAVideo,
  getAllVideo,
  deleteAVideo,
} = require("../controllers/videoCtrl");
const { videoImgResize, uploadPhoto } = require("../middlewares/uploadImage");
const router = express.Router();

router.post("/post", uploadPhoto.single("image"),  postVideo);
router.get("/", getAllVideo);
router.get("/:slug", getAVideo);
router.delete("/:id", deleteAVideo);

module.exports = router;
