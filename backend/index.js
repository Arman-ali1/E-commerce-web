import userRegistration from "./models/Register.js";
import collection from "./mongos.js";
import cors from 'cors';
import express from 'express';
import mongoose from "mongoose";
const app=express();

// mongodb connection

mongoose.connect("mongodb://localhost:27017/names")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect mongodb")
})
// End connection Script

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.get("/",cors(),(req,res)=>{
    res.send("home");
})

// app.get("",(req,res)=>{
//     res.send("home");
// })

// app.post("/sendData", async(req,res)=>{
//     const{name} =req.body
//     // console.log(req)
//     // console.log(req.body)
//     try{
//         await collection.insertMany([{name:name}])
//         // const allData=await collection.find({})
//         // res.json(allData)
//     }
//     catch{

//     }
// })
// console.log("ddddddddddddddddddddddddd");
app.post("/register", async(req,res)=>{
    
    const{email,password,repeatPassword,firstName,lastName,phone,company} =req.body
    // console.log(req)
    console.log(req.body)
    try{
        await userRegistration.insertMany([{email:email,password:password,repeatPassword:repeatPassword,firstName:firstName,lastName:lastName,phone:phone,company:company}])
        // const allData=await collection.find({})
        res.json("data store succsefully")
    }
    catch{
        console.log("Problem in schema");
    }
})
// console.log("dddddddddddddddddddddddddend");
// app.get("/getdata",async(req,res)=>{
//     try{
//         const allData=await collection.find({})
//         res.json(allData)
//     }
//     catch{
//         res.json("fail")

//     }
// })
// app.get("/userdata",async(req,res)=>{
//     try{
//         const allData=await userRegistration.find({})
//         res.json(allData)
//     }
//     catch{
//         res.json("fail")

//     }
// })
app.get("/User",(req,res)=>{
    res.send("hello User");
})
app.get("/loginuser",async(req,res)=>{
    console.log("Req start");
    const{pass,eeem} =req.body
    console.log(pass);
    try{
        const allData=await userRegistration.find({})
        res.json(allData)
        // .then(res.allData)
    }
    catch{
        res.json("fail fetching data from database")

    }

})
app.post("/loginuserDetail",async(req,res)=>{
    console.log("Req start");
    const{pass,eeem} =req.body
    let cnt=1;
    console.log(`1. `,pass);
    console.log(eeem);
    
    try{
        const allData=await userRegistration.findOne({email:eeem});
        if(!allData){
            console.log("user not found");
            // const message = "user not exists";
            const datafound=false;
            res.send(datafound);
        }
        else{
        console.log("reg all data");
        console.log(allData);
        res.status(200).json(allData) 
        // .then(res.allData) 
        }
    }  
    catch{
        res.json("fail fetching data from database");

    }

})
const port=3300;
app.listen(port,()=>{
    console.log(`server start at port no ${port}`);
})