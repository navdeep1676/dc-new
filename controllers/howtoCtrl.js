const asyncHandler = require('express-async-handler')
const Howto = require("../models/howtoModel")
const slugify=require("slugify")

// Create a how To

const createHowTo = asyncHandler(async (req, res) => {
    try {
        req.body.slug=slugify(req.body.title.toLowerCase())
        const newHowTo = await Howto.create(req.body)
        res.json({
            status: true,
            newHowTo
        })
    } catch (error) {
        throw new Error(error)
    }
})

// Get a how to

const getAHowTo = asyncHandler(async (req, res) => {
    const { slug } = req.params
    console.log(slug);
    try {
        const getAHowTo = await Howto.findOne({slug:slug})
        res.render("howto",{
            status: true,
            getAHowTo
        })
    } catch (error) {
        throw new Error(error)
    }
})

// Get all how to

const getAllHowTo = asyncHandler(async (req, res) => {
    
    try {
        const getAllHowTo = await Howto.find()
        res.render("documentations",{
            status: true,
            getAllHowTo
        })
    } catch (error) {
        throw new Error(error)
    }
})




module.exports={createHowTo,getAHowTo,getAllHowTo}
