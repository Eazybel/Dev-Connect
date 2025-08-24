const mongoose=require("mongoose")
const express=require("express")
const app=express()
app.use(express.json())
const devModel=require("../schema/schema")
const user=async(req,res,params)=>{
        const user=await devModel.findOne({email:req.params.email})
res.json(user)
}
module.exports=user