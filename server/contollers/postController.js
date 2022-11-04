const { default: mongoose } = require("mongoose");
const User = require("../model/user");
const Post= require("../model/post");

const getAllPost = async(req,res,next)=>{
    let post;
    try {
        post= await Post.find().populate('user');
    } catch (error) {
        console.log(error);
    }
    if(!post){
        return res.status(404).json({message:"blogs not found"});
    }
    return res.status(200).json({post ,  message:"everything ok"})

}

const addPost =async(req,res,next)=>{
    let post;
    const{title,description,image,location,date,user}=req.body
    if(!description || !title || !image ||!location || !date || !user){
        return res.status(422).json({message:"unprocessable entity"})
    }
    let existingUser;
    existingUser = await User.findById(user)
    if(!existingUser){
        return res.status(404).json({message:"user not avail"})
    }
    try {
        post =new Post({
            title,image,description,location,date:new Date(`${date}`),user
        })

        const session = await mongoose.startSession()
        session.startTransaction();
        existingUser.posts.push(post)
        await existingUser.save({session})
        await post.save({session});
        await session.commitTransaction();
    
    
    } catch (error) {
        console.log(error);
    }
    if(!post){
        return res.status(404).json({message:"post not added"})
    }
    return res.status(200).json({post})
}
const getPostById = async(req,res,next)=>{
    let post;
    const id = req.params.id;
    try{
        post = await Post.findById(id).populate('user')
        console.log(post)
    }catch(e){
        console.log(e);
    }
    if(!post){
        return res.status(422).json({message:"no post exists"})
    }
    return res.status(200).json({post})
}
const update = async(req,res,next)=>{
    const id = req.params.id;
    const{title,description,image,location,date}=req.body
    if(!description || !title || !image ||!location || !date){
        return res.status(422).json({message:"unprocessable entity"})
    }
    let post;
    try{
     post = await Post.findByIdAndUpdate(id,{
        title,image,description,location,date:new Date(`${date}`)
     })
    }catch(e){
        console.log(e);
    }
    if(!post){
        return res.status(422).json({message:"internal error"})
    }
    return res.status(200).json({message:"updated successfullly",post})
}
const deletPost = async(req,res,next)=>{
    const id =req.params.id
    let post;
   

    try {
        post  = await Post.findByIdAndDelete(id).populate('user')
        console.log(post)
        await post.user.posts.pull(post)
        await post.user.save()
      
    
    } catch (error) {
        console.log(error);
    }
    if(!post){
        return res.status(422).json({message:"can't delete"})
    }
    return res.status(200).json({post})
}
exports.getAllPost=getAllPost
exports.addPost=addPost
exports.getPostById=getPostById
exports.update=update
exports.deletPost=deletPost