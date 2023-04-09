const express = require('express');
const newsletterRouter = express.Router();

const { subscribeNewsLetter } = require('../controllers/newsletterCtrl');

newsletterRouter.post("/",subscribeNewsLetter)


module.exports=newsletterRouter