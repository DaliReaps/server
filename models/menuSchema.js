const mongoose=require('mongoose')
const menuSchema=mongoose.Schema({
    name:String,
    description:String,
    rating:Number,
    img:String,
    category:String,
    price:Number})
const Menu=mongoose.model('menu',menuSchema)
module.exports=Menu