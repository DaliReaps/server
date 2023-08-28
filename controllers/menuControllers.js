const Menu=require('../models/menuSchema')

const addmenu=async(req,res)=>{
try {
    const  {name,description,rating,img,category,price}=req.body
    const existmenu =await Menu.findOne({name:name})
    if (existmenu)
    {res.status(400).json({msg:"menu already exists"})} 
    else
    {const menuadd= new Menu({name:name,description:description,rating:rating,img:img,category:category,price:price})
    await menuadd.save()
    res.status(201).json({msg:"New Menu added",menuadd:menuadd})
    }}
 catch (error) {
    res.status(500).json({msg:"something went wrong",err:error})
}
}



const deletemenu=async(req,res)=>{
    try {
       
        const menudeleted =await Menu.findOneAndDelete({name:req.params.name})
        
        res.status(200).json({msg:"menu successfully deleted",menudeleted:menudeleted})
    }  
     catch (error) {
        res.status(500).json({msg:"something went wrong",err:error})
    }
    }

    const getmenu=async(req,res)=>{
        try {
            
            const menuget =await Menu.find()
            
            res.status(200).json({msg:"get all menus",menuget:menuget})
        }  
         catch (error) {
            res.status(500).json({msg:"something went wrong",err:error})
        }
        }

        const updatemenu=async(req,res)=>{
                 
            
            try {
            {const menuupdate= await Menu.findByIdAndUpdate({_id:req.params.id},{...req.body})
            res.status(200).json({msg:"menu updated",menuupdate:menuupdate})
            }
                
            } catch (err) {
                res.status(500).json({msg:"something went wrong",err:err})
            }}

module.exports={addmenu,deletemenu,getmenu,updatemenu}