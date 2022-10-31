const { getAllUser, signUp, login } = require("../contollers/userController");

const express = require("express")
const userRouter = express.Router();

userRouter.get('/',getAllUser)
userRouter.post("/signup",signUp)
userRouter.post("/login",login)

module.exports=userRouter