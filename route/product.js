const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const {Productcontroller} = require('../controller/Product.controller')
const auth = require('../middleware/verifyToken')
const{adminMiddleware} = require('../middleware/adminMiddlware')

router.get('/', Productcontroller.getAll)
router.get('/:id', Productcontroller.detailProduct)
router.post('/', upload.array("product_img"), Productcontroller.createProduct)
router.delete('/:id', Productcontroller.deleteProduct)
router.put('/:id',upload.array('product_img'), Productcontroller.updateProduct)

module.exports = router