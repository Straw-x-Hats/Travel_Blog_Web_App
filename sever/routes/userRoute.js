const { getAllUser } = require("../contollers/userController");

const express = require.express();
const userRouter = express.Router();

userRouter.get('/',getAllUser)