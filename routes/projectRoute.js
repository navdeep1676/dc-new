const express = require("express")
const { createProject, getAllProjects, getAProject } = require("../controllers/projectCtrl")
const projectRouter = express.Router()



projectRouter.post("/", createProject)
            .get("/",getAllProjects)
            .get("/:slug", getAProject)







module.exports=projectRouter