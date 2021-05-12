const express = require('express')
const router = express.Router()
const {Authscontroller} = require('../controller/Auths.controller')
const auth = require('../middleware/verifyToken')
// const {adminMiddleware} = require('../middleware/adminMiddlware')


router.get('/',Authscontroller.getAll)
router.post('/login',Authscontroller.login)
router.post('/register',Authscontroller.reg)
router.delete('/:id',auth,Authscontroller.deleteAdmin)
router.put('/:id',auth,Authscontroller.updateAdmin)
router.get('/token',auth,Authscontroller.token)

module.exports = router