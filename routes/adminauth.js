const express = require('express')
const { index_admin_login, index_admin_dashbaord } = require('../controllers/userCtrl')
const router = express.Router()

router.get("/",index_admin_login)
router.get("/dashboard",index_admin_dashbaord)

module.exports=router