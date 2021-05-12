const express = require('express')
const router =  express.Router()
const User = require('../models/User')
const {Usercontroller} = require('../controller/Users.controller')
const auth = require('../middleware/verifyToken')
// const {userMiddleware} = require('../middleware/adminMiddlware')

router.get('/token',auth,Usercontroller.token)
router.post('/register',Usercontroller.reg)
router.post('/login',Usercontroller.login)
// router.get('/test', async (req, res) => {
//     const auth = new User({
//         firstname: "admin",
//         lastname: "admin",
//         username: "Admin",
//         password: "123456",
//         email: "admin@gmail.com",
//         address: "Nha Trang",
//         phone: "0387892323",
//         role: "admin"
//     })
//     await auth.generatePassword();
//     await auth.save();
//     res.send(auth)
// })

module.exports = router