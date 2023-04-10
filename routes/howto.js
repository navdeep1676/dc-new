const express = require("express")
const { createHowTo, getAHowTo, getAllHowTo } = require("../controllers/howtoCtrl")
const howRouter = express.Router()



howRouter.post("/", createHowTo)
            .get("/",getAllHowTo)
    .get("/:slug", getAHowTo)
            







module.exports=howRouter

