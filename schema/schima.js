const mongoose=require("mongoose")
const devSchema=mongoose.Schema({
    name:String
})
const devModel=mongoose.model("devModel",devSchema,"Users")
module.exports={devModel}