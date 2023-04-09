const asyncHandler = require('express-async-handler')
const Contact =require('../models/contactModel')
const showContact = asyncHandler(async(req, res) => {
    res.render('contact')
})
const postContact = asyncHandler(async (req, res) => {
    try {
        const newContact = await Contact.create(req.body)
        res.json({status:true,newContact})
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {
    showContact,
    postContact
}