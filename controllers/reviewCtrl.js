const Review = require("../models/reviewModel")
const asyncHandler = require('express-async-handler')


// Create a Review

const createReview = asyncHandler(async (req, res) => {
    try {
        const newReview = await Review.create(req.body)
        res.json({
            status: true,
            newReview
        })
    } catch (error) {
        throw new Error(error)
    }
})

// Get all Reviews

const getAllReviews = asyncHandler(async (req, res) => {
    try {
        const getAllReview = await Review.find()
        res.json({
            status: true,
            getAllReview
        })
    } catch (error) {
        throw new Error(error)
    }
})





module.exports={createReview,getAllReviews}