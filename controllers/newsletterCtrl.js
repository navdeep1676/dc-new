const Newsletter = require("../models/newsLetterModel")
const asyncHandler=require('express-async-handler')
const subscribeNewsLetter = asyncHandler(async (req, res) => {
    try {
        const newSubscriber = await Newsletter.create(req.body)
        res.json({
            status: true,
            newSubscriber
        })
    } catch (error) {
        throw new Error(error)
    }
})

module.exports={subscribeNewsLetter}