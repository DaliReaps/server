const express=require('express')
const router=express.Router()
const adminmiddleware = require('../middleware/adminmiddleware')
const {deleteuser,updateuser,getusers,getorders,deleteorder}=require('../controllers/adminControllers')


router.delete('/deleteuser/:id',adminmiddleware,deleteuser)
router.put('/updateuser/:id',adminmiddleware,updateuser)
router.get('/getusers',adminmiddleware,getusers)
router.get('/getorders',adminmiddleware,getorders)
router.delete('/deleteorder/:id',adminmiddleware,deleteorder)

module.exports=router 