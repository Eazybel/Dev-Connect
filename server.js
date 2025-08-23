const express=require("express")
const mongoose=require("mongoose")
const path = require("path")
const app=express()
require("dotenv").config()
app.use(express.json())
app.use(express.static(path.join(__dirname,"./public"),{index:false}))
mongoose.connect(process.env.STRING)
.then(()=>{
    console.log("connected to db sucessfully")
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.html"))
})
app.listen(5000,()=>{
    console.log("Listening to port 5000")
})