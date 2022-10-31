const User = require("../model/user")


const getAllUser=async(req,res,next)=>{
    let user;
    try{
      user = await User.find()
    }catch(e){
        console.log(e)
    }
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    return res.status(200).json({user})
}
exports.getAllUser=getAllUser