const express = require("express")
const { getAllPost, addPost, getPostById, update, deletPost, getUserById} = require("../contollers/postController")
const postRouter = express.Router()

postRouter.get('/',getAllPost)
postRouter.get('/:id',getPostById)
postRouter.post('/add',addPost)
postRouter.put('/:id',update)
postRouter.delete('/:id',deletPost)
postRouter.get("/user/:id",getUserById)


module.exports =postRouter