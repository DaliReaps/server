const User=require('../models/userSchema')
const Order=require('../models/orderSchema')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const register=async(req,res)=>{
try {
    const  {email,password,age,ratings,firstname,lastname}=req.body
    const existuser=await User.findOne({email:email})
     if (existuser)
     {res.status(400).json({msg:"email already exits"})} 
     else
     {const hashPW=await bcrypt.hash(password,10)
    console.log(hashPW)
    const user=new User({email,age,password:hashPW,ratings,firstname,lastname})
    await user.save()
    const token=jwt.sign({id:user._id},process.env.JWT,{expiresIn:"7d"})
    res.status(201).json({msg:"Account successfully created",user:user,token:token})
    }
} catch (error) {
    res.status(500).json({msg:"something went wrong",err:error})
}
}


const login=async(req,res)=>{
    try {
        const  {email,password,age,Ratings}=req.body
        const existuser=await User.findOne({email:email})
         if (!existuser)
         {res.status(400).json({msg:"email not found,make sure to register"})} 
         else
         {const checkPW=await bcrypt.compare(password,existuser.password)
        if (!checkPW){res.status(400).json({msg:"wrong password,try again"})}
        else {const token=jwt.sign({id:existuser._id},process.env.JWT,{expiresIn:"7d"})
        res.status(200).json({msg:"Successfully logged in",user:existuser,token:token})}
        
        }
    } catch (error) {
        res.status(500).json({msg:"something went wrong",err:error})
    }
    }
    const selfdeleteuser=async(req,res)=>{
        try {
          const deleteduser=await User.findByIdAndDelete({_id:req.body.userid})
          res.status(200).json({msg:"User successfully self deleted ",deleteduser:deleteduser})
            }
         catch (error) {
            res.status(500).json({msg:"something went wrong",err:error})
        }
        }

        const selfupdateuser=async(req,res)=>{
            try {
              const updateduser=await User.findByIdAndUpdate({_id:req.body.userid},{...req.body,role:"user"})
              res.status(200).json({msg:"User successfully self updated ",updateduser:updateduser})
                }
             catch (error) {
                res.status(500).json({msg:"something went wrong",err:error})
            }
            }
    
            const postorder=async(req,res)=>{
                try {
                  const postedorder=new Order({...req.body,owner:req.body.userid,item:req.params.id})
                   await postedorder.save()
                  res.status(201).json({msg:"Order successfully created ",postedorder:postedorder})
                    }
                 catch (error) {
                    res.status(500).json({msg:"something went wrong",err:error})
                }
                }

                const selforder=async(req,res)=>{
                    try {
                      const orderself=await Order.find({owner:req.body.userid}).populate("item")
                      res.status(200).json({msg:"Get my order ",orderself:orderself})
                        }
                     catch (error) {
                        res.status(500).json({msg:"something went wrong",err:error})
                    }
                    }

module.exports={register,login,selfdeleteuser,selfupdateuser,postorder,selforder}