const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    image:{
      type:String,
      require:true,
    },
    user:{
        type:String,
        require:true,
      },
      location:{
       type:String,
       required:true
      },
      date:{
        type:String,
        require:true
      }
})
module.exports=mongoose.model("Post",PostSchema);