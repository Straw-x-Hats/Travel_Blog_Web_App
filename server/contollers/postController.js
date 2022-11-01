const Post= require("../model/post")

const getAllPost = async(req,res,next)=>{
   let post;
   try{
    post = await Post.find()
   }catch(e){
    console.log(e);
   }
   if(!post){
    return res.status(404).json({message:"post not available"})
   }
   return res.status(200).json({post})
}

const addPost =async(req,res,next)=>{
    let post;
    const{title,description,image,location,date,user}=req.body
    if(!description || !title || !image ||!location || !date || !user){
        return res.status(422).json({message:"unprocessable entity"})
    }
    try {
        post =new Post({
            title,image,description,location,date:new Date(`${date}`),user
        })
     post=   await post.save()
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
        post = await Post.findById(id)
    }catch(e){
        console.log(e);
    }
    if(!post){
        return res.status(422).json({message:"no post exists"})
    }
    return res.status(200).json({post})
}
exports.getAllPost=getAllPost
exports.addPost=addPost
exports.getPostById=getPostById