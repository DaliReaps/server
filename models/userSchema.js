const mongoose=require('mongoose')
const subSchema=mongoose.Schema({_id:mongoose.Schema.Types.ObjectId,rate:Number})
const userSchema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true,minLength:6},
    age:Number,
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    ratings:[subSchema],
    role:{type:String,
    enum:["user","admin"],default:"user"}
})

const User=mongoose.model('user',userSchema)
module.exports=User