const express = require("express")
const { createReview, getAllReviews } = require("../controllers/reviewCtrl")
const reviewRouter = express.Router()



reviewRouter.post("/", createReview)
            .get("/", getAllReviews)







module.exports=reviewRouter

