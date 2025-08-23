const devModel=require("../schema/schima")
const register=async(req,res)=>{
const user=new devModel({
    name:"ezedin",
    stack:"ezedin",
    skill:"5",
    experiance:5,
    phone:5,
    url:"5555",
    github:"5555",
    linkedin:"5555"
})
user.save()
.then(()=>{
    console.log("saved")
})
res.send("sucess")
}
module.exports=register