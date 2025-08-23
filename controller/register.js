const devModel=require("../schema/schema")
const register=async(req,res)=>{
const user=new devModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        stack:req.body.stack,
        experience:req.body.experience,
        github:req.body.github,
        url:req.body.url,
        linkedin:req.body.linkedin
})
user.save()
.then(()=>{
    console.log("saved")
})
res.send("sucess")
}
module.exports=register