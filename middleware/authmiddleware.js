const jwt=require('jsonwebtoken')
const authmiddleware=async(req,res,next)=>{
    try {
    const token=req.headers.token
    const verifytoken=jwt.verify(token,process.env.jwt)
    if (!verifytoken){res.status(400).json({msg:"you are not authorized"})}
    else {
        req.body.userid=verifytoken.id
        next()
         
    }
    } catch (error) {
        res.status(500).json({msg:"something went wrong",err:error})
    }
    
}
module.exports=authmiddleware