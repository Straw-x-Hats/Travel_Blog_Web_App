const mongoose =require("mongoose")
const Schema = mongoose.Schema;
const userSchema = new Schema({

    name:{
      type:String,
      required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

      },
      password:{
        type:String,
        required:true
      },
      posts:[{type:mongoose.Types.ObjectId,ref:"Post",require:"true"}]
})
module.exports = mongoose.model("User",userSchema);
