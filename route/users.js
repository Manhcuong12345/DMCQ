const express = require('express')
const router =  express.Router()
const User = require('../models/User')
const {Usercontroller} = require('../controller/Users.controller')
const auth = require('../middleware/verifyToken')
const {userMiddleware} = require('../middleware/adminMiddlware')

router.get('/token',auth,Usercontroller.token)
router.post('/register',Usercontroller.reg)
router.post('/login',Usercontroller.login)

module.exports = router