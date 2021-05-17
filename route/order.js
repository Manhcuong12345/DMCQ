const express = require('express')
const router = express.Router()
// const upload = require('../middleware/upload')
const {Orderscontroller} = require('../controller/Orders.controller')
const auth = require('../middleware/verifyToken')


router.put('/:id',auth,Orderscontroller.updateStatus)
router.post('/',auth,Orderscontroller.createOrder)
router.get('/',auth,Orderscontroller.getOrder)

module.exports = router