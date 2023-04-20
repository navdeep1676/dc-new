const express = require('express')
const { index_admin_login, index_admin_dashbaord } = require('../controllers/userCtrl')
const { indexAdminDocs } = require('../controllers/howtoCtrl')
const { indexAddTut, indexAddTutCategory, indexTutorialList, indexTutorialCatList, getATutorialAdmin, getATutorialCategoryAdmin } = require('../controllers/tutorialCtrl')
const router = express.Router()

router.get("/",index_admin_login)
router.get("/dashboard", index_admin_dashbaord)
router.get("/add-docs", indexAdminDocs)
router.get("/add-tutorial", indexAddTut)
router.get("/list-tutorials",indexTutorialList)
router.get("/add-tut-category", indexAddTutCategory)
router.get("/list-tutorial-category", indexTutorialCatList)
router.get("/edit-tutorial/:id", getATutorialAdmin)
router.get("/edit-tut-category/:id",getATutorialCategoryAdmin)



module.exports=router