const express = require("express");

const { videoImgResize, uploadPhoto } = require("../middlewares/uploadImage");
const { postTutorial, getAllTutorialCat, getATutorial, deleteATutorial, postTutorialCategory } = require("../controllers/tutorialCtrl");
const router = express.Router();


router.post("/postcategory", uploadPhoto.single("tutcatimage"), postTutorialCategory);
router.post("/post", uploadPhoto.single("image"),  postTutorial);

router.get("/", getAllTutorialCat);
router.get("/:type/:slug", getATutorial);
router.delete("/:id", deleteATutorial);

module.exports = router;
