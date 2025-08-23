const model=require("../schema/schima")
const register=async(req,res)=>{
const user=new model({
    name:"ezedin"
})
res.send("sucess")
}
module.exports=register