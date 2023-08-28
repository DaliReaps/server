const jwt=require('jsonwebtoken')
const User=require('../models/userSchema')
const adminmiddleware=async(req,res,next)=>{
    try {
    const token=req.headers.token
    const verifytoken=jwt.verify(token,process.env.jwt)
   
    if (!verifytoken){res.status(400).json({msg:"you are not authorized"})}
   
    
    else { const user=await User.findById(verifytoken.id)
        if (user.role==='admin') next();
    else {res.status(400).json({msg:"you have no admin rights"})}}
    
    }
    catch (error) {
        res.status(500).json({msg:"something went wrong",err:error})
    }
    } 
  
module.exports=adminmiddleware