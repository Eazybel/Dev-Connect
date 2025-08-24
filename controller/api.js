const devModel=require("../schema/schema")
const api=async(req,res)=>{
    const users=await devModel.find()
    res.status(200).json(users)
}
module.exports=api