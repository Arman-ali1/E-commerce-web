import mongoose from 'mongoose';


const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
const collection=mongoose.model("collections",newSchema)
export default collection;