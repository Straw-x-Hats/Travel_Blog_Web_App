const User = require("../model/user")
const bcrypt = require("bcryptjs")

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

const signUp=async(req,res,next)=>{
    const{ name , email ,password} =req.body
    let user;
    if(!name &&
        name.trim()==="" &&
        !email &&
        email.trim()===""&&
        !password &&
        password.trim()=="" 
         
         
         ){
            return res.status(422).json({message:"invalid info"})
         }
         const hashedPass= bcrypt.hashSync(password)
    try {
        user = new User({
            name,
            email,
            password:hashedPass
         })
        await user.save()
    } catch (error) {
        console.log(error)
    }
    if(!user){
        return res.status(500).json({message:"internal server error"})
    }
    return res.status(201).json({user})
}
const login=async(req,res,next)=>{
    const {email,password}=req.body
    let existingUser;
    try{
        existingUser = await User.findOne({email})
    }catch(error){
        console.log(error)
    }
    if(!existingUser){
        return res.status(422).json({message:"user not avail"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(isPasswordCorrect){
        return res.status(200).json({message:"successfully loggedin",id:existingUser._id} )
    }
    return res.status(404).json({message:"passwors is incorrect"})
}

exports.getAllUser=getAllUser
exports.signUp=signUp
exports.login=login