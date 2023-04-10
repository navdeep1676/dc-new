const Project = require("../models/projectModel")
const asyncHandler = require('express-async-handler')
const slugify=require("slugify")


const createProject = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug=slugify(req.body.title.toLowerCase())
        }
        const project = await Project.create(req.body)
        res.json({status:true,project})
    } catch (error) {
        throw new Error(error)
    }
})

const getAllProjects = asyncHandler(async (req, res) => {
    try {
        const project = await Project.find()
        res.render("project",{status:true, project})
    } catch (error) {
        throw new Error(error)
    }
})

const getAProject = asyncHandler(async (req, res) => {
    const {slug}=req.params
    try {
        const project = await Project.findOne({slug:slug})
        res.render("projectDetail",{status:true, project})
    } catch (error) {
        throw new Error(error)
    }
})


module.exports={createProject,getAllProjects,getAProject}