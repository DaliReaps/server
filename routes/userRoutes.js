const express=require('express')
const router=express.Router()
const {register,login,selfdeleteuser,selfupdateuser,postorder,selforder}=require('../controllers/userControllers')
const authmiddleware = require('../middleware/authmiddleware')
router.post('/register',register)
router.post('/login',login)
router.delete('/selfdeleteuser',authmiddleware,selfdeleteuser)
router.put('/selfupdateuser',authmiddleware,selfupdateuser)
router.post('/postorder/:id',authmiddleware,postorder)
router.get('/selforder',authmiddleware,selforder)


module.exports=router 