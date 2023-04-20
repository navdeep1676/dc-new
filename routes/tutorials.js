const express = require("express");

const { videoImgResize, uploadPhoto } = require("../middlewares/uploadImage");
const { postTutorial, getAllTutorialCat, getATutorial, deleteATutorial, postTutorialCategory, indexTutorials, getAllTutorials, deleteATutorialCategory, editATutorialAdmin, updateTutorialCat } = require("../controllers/tutorialCtrl");
const router = express.Router();


router.post("/postcategory", uploadPhoto.single("tutcatimage"), postTutorialCategory);
router.post("/post", uploadPhoto.single("image"),  postTutorial);

router.get("/", indexTutorials);

router.get("/getAllTutsCat", getAllTutorialCat)
router.get("/getAllTutorials",getAllTutorials)
router.get("/:type/:slug", getATutorial);
router.put("/:id",editATutorialAdmin)
router.put("/tutorialcategory/:id",updateTutorialCat)
router.delete("/:id", deleteATutorial);
router.delete("/tutorialcategory/:id", deleteATutorialCategory);

module.exports = router;
