const express=require('express')
const router=express.Router()
const adminmiddleware = require('../middleware/adminmiddleware')
const {addmenu,deletemenu,getmenu,updatemenu}=require('../controllers/menuControllers')
router.post('/addmenu',adminmiddleware,addmenu)
router.delete('/deletemenu/:name',adminmiddleware,deletemenu)
router.get('/getmenu',getmenu)
router.put('/updatemenu/:id',adminmiddleware,updatemenu)

module.exports=router 