const Slider = require('../models/Slider')
const _ = require('lodash')
const fs = require('fs')

class Sliderscontroller {
   
    static async createSlide(req,res) {
        // const linkurl = 'https://www.googleapis.com/drive/v3/files'
        let props = _.pick(req.body, ['name','img'])
        if (req.file) {
            props.product_img = '/img_product/' + req.file.filename
        }
        // const field = {name :name}
        // new Product(field) = new Product({name: name})

        const slider = await new Slider(props)
        slider.save()
        if (!slider) return res.status(400).send({ error_message: 'Not save slider' })
        res.send(slider)

    }

   
    static async deleteSlider(req,res){
        const slider =  await Slider.findByIdAndDelete(req.params.id)
        const paths = 'public'+ slider.img
        try {
            fs.unlink(paths, function (err) {
                console.log(err.message)
            })
        }
        catch (err) {
            console.log(err.message)
        }
        if(!slider) res.status(404).send({error:'Slider is not delete file'})
        res.send(slider)
    }

     static async updateSlider(req,res){
        const slider = await Slider.findOneAndUpdate(req.params.id)
        if(req.file){
            try {
                const paths = 'public' + slider.img
                fs.unlink(paths, function(err){
                    if (err) {
                        console.log(err)
                    }
                })
            }catch(err){
                console.log(err)
            }
        }
        res.send(slider)
    }

    static async getSlider(req, res){
        const slider = await Slider.find({})
        res.send(slider)
    }

}

    


// module.exports = new Slidercontroller
module.exports.Sliderscontroller = Sliderscontroller