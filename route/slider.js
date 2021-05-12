const express = require('express');
const router = express.Router()
const upload = require('../middleware/upload')
const {Sliderscontroller} = require('../controller/Sliders.controller')
const auth = require('../middleware/verifyToken')

router.post('/',auth,upload.single('img'),Sliderscontroller.createSlide)
router.delete('/:id',auth,Sliderscontroller.deleteSlider)
router.put('/:id',auth,upload.single('img'),Sliderscontroller.updateSlider)
router.get('/',auth,Sliderscontroller.getSlider)

module.exports = router