const express = require('express')
const { index_admin_login, index_admin_dashbaord } = require('../controllers/userCtrl')
const { indexAdminDocs } = require('../controllers/howtoCtrl')
const { indexAddTut, indexAddTutCategory } = require('../controllers/tutorialCtrl')
const router = express.Router()

router.get("/",index_admin_login)
router.get("/dashboard", index_admin_dashbaord)
router.get("/add-docs", indexAdminDocs)
router.get("/add-tutorial", indexAddTut)
router.get("/add-tut-category",indexAddTutCategory)

module.exports=router