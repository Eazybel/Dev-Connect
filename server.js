const express=require("express")
const mongoose=require("mongoose")
const path = require("path")
const render=require("./controller/render")
const register=require("./controller/register")
const app=express()
require("dotenv").config()
app.use(express.json())
mongoose.connect(process.env.STRING)
.then(()=>{
    console.log("connected to db sucessfully")
})

app.get("/",render)
app.post("/",register)
app.listen(5000,()=>{
    console.log("Listening to port 5000")
})