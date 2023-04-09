const express = require('express');
const { showContact, postContact } = require('../controllers/contactCtrl');
const router = express.Router()


router.get('/',showContact).post('/',postContact)

module.exports = router;