const devModel=require("../schema/schema")
const test=async(req,res)=>{
  const users= await devModel.find()
  res.status(200).send(users.length)
}
module.exports=test