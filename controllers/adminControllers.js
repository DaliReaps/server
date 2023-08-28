const User=require('../models/userSchema')
const Order=require('../models/orderSchema')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


    const deleteuser=async(req,res)=>{
        try {
          const deleteduser=await User.findByIdAndDelete({_id:req.params.id})
          res.status(200).json({msg:"User successfully deleted by admin",deleteduser:deleteduser})
            }
         catch (error) {
            res.status(500).json({msg:"something went wrong",err:error})
        }
        }


        
    const updateuser=async(req,res)=>{
            try {
              const updateduser=await User.findByIdAndUpdate({_id:req.params.id},{...req.body})
              res.status(200).json({msg:"User successfully updated by admin",updateduser:updateduser})
                }
             catch (error) {
                res.status(500).json({msg:"something went wrong",err:error})
            }
            }
    

     const getusers=async(req,res)=>{
              try {
                const usersget=await User.find()
                res.status(200).json({msg:"get users by admin",usersget:usersget})
                  }
               catch (error) {
                  res.status(500).json({msg:"something went wrong",err:error})
              }
              }

      const getorders=async(req,res)=>{
                try {
                  const orderget=await Order.find().populate("owner").populate("item")
                   
                  res.status(201).json({msg:" get orders successfully by admin ",orderget:orderget})
                    }
                 catch (error) {
                    res.status(500).json({msg:"something went wrong",err:error})
                }
                }
      
      const deleteorder=async(req,res)=>{
                  try {
                    const orderdeleted=await Order.findByIdAndDelete({_id:req.params.id})
                     
                    res.status(201).json({msg:"  order successfully deleted by admin ",orderdeleted:orderdeleted})
                      }
                   catch (error) {
                      res.status(500).json({msg:"something went wrong",err:error})
                  }
                  }

module.exports={deleteuser,updateuser,getusers,getorders,deleteorder}