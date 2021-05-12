const express = require('express')
const router = express.Router()
const {Categorycontroller} = require('../controller/Category.controller')
const auths = require('../middleware/verifyToken')
const {adminMiddleware} = require('../middleware/adminMiddlware')

router.post('/',auths,Categorycontroller.createCategory)
router.delete('/:id',auths,Categorycontroller.deleteCategory)
router.put('/:id',auths,Categorycontroller.updateCategory)
router.get('/',Categorycontroller.Categoryall)
router.get('/:id',auths,Categorycontroller.detailCategory)

module.exports = router
