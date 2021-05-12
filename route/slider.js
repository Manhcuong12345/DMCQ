const express = require('express');
const router = express.Router()
const upload = require('../middleware/upload')
const {Sliderscontroller} = require('../controller/Sliders.controller')
const auth = require('../middleware/verifyToken')

router.post('/',upload.single('img'),Sliderscontroller.createSlide)
router.delete('/:id',Sliderscontroller.deleteSlider)
router.put('/:id',upload.single('img'),Sliderscontroller.updateSlider)
router.get('/',Sliderscontroller.getSlider)

module.exports = router