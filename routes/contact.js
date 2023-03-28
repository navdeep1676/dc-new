const express = require('express');
const { showContact } = require('../controllers/contactCtrl');
const router = express.Router()


router.get('/',showContact)

module.exports = router;