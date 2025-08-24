const path=require("path")
const express=require("express")
const app=express()
app.use(express.static(path.join(__dirname,"../public"),{index:false}))
const render=(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"../public/index.html"))
}
module.exports=render
