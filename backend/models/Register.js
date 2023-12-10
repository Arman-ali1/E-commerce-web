import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    repeatPassword:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    phone:{
        type:String,
        required:true
    },
    company:{
        type:String,
        
    }
},{
    timestamps:true

})
const userRegistration=mongoose.model("userRegistration",userSchema)
export default userRegistration;