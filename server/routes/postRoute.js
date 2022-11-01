const express = require("express")
const { getAllPost, addPost, getPostById, update, deletPost} = require("../contollers/postController")
const postRouter = express.Router()

postRouter.get('/',getAllPost)
postRouter.get('/:id',getPostById)
postRouter.post('/add',addPost)
postRouter.put('/:id',update)
postRouter.delete('/:id',deletPost
)


module.exports =postRouter