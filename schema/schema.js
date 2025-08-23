const mongoose=require("mongoose")
const devSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    stack:{
        type:String,
        require:true
    },
    experiance:{
        type:Number,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
     url:{
        type:String,
    },
     github:{
        type:String,
    },
     linkedin:{
        type:String,
    }
    
})
const devModel=mongoose.model("devModel",devSchema,"Users")
module.exports=devModel