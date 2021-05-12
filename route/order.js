const express = require('express')
const router = express.Router()
// const upload = require('../middleware/upload')
const {Orderscontroller} = require('../controller/Orders.controller')
const auth = require('../middleware/verifyToken')


router.put('/:id',Orderscontroller.updateStatus)
router.post('/',Orderscontroller.createOrder)
router.get('/',Orderscontroller.getOrder)

module.exports = router