const express = require("express")
const { getAllPost, addPost, getPostById} = require("../contollers/postController")
const postRouter = express.Router()

postRouter.get('/',getAllPost)
postRouter.get('/:id',getPostById)
postRouter.post('/add',addPost)

module.exports =postRouter