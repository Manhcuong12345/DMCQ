const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const {Productcontroller} = require('../controller/Product.controller')
const auth = require('../middleware/verifyToken')
const{adminMiddleware} = require('../middleware/adminMiddlware')

router.get('/' ,Productcontroller.getAll)
router.get('/:id', auth,Productcontroller.detailProduct)
router.post('/',auth ,upload.single("product_img"), Productcontroller.createProduct)
router.delete('/:id',auth ,Productcontroller.deleteProduct)
router.put('/:id',auth ,upload.single('product_img'), Productcontroller.updateProduct)

module.exports = router