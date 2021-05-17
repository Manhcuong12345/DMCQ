const express = require('express');
const router = express.Router()
const drive_api = require('../middleware/drive_api')
const {Sliderscontroller} = require('../controller/Sliders.controller')
const auth = require('../middleware/verifyToken')

router.post('/',drive_api.single('img'),Sliderscontroller.createSlide)
router.delete('/:id',auth,Sliderscontroller.deleteSlider)
router.put('/:id',auth,drive_api.single('img'),Sliderscontroller.updateSlider)
router.get('/',Sliderscontroller.getSlider)

module.exports = router