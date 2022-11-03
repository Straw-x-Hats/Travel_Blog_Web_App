import axios from 'axios'


export const getAllPost = async()=>{
    const res = await axios.get("http://localhost:5000/post")
    .then((e)=>console.log(e))
    const data =res.data;
    return data;
}
