const mongoose=require('mongoose')
const orderSchema=mongoose.Schema({
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'menu'},
    numberOfItems:{type:Number,required:true},
    createAt:{
        type:Date,
        default:new Date() },
       owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
       }
    
    
})

const Order=mongoose.model('order',orderSchema)
module.exports=Order