const Slider = require('../models/Slider')


class Sliderscontroller {
   
    static async createSlide(req,res) {
           const formdata = req.body
           formdata.img = req.file.filename
           const slider = new Slider(formdata)
           slider.save()
           if(!slider) res.status(400).send({error:'Invalid not create'})
           res.send(slider)
    }

    static async deleteSlider(req,res){
        const deleteslider =  await Slider.findByIdAndDelete(req.params.id)
        if(!deleteslider) res.status(404).send({error:'Slider is not delete file'})
        res.send(deleteslider)
    }

     static async updateSlider(req,res){
        const formdata = req.body
        formdata.img = req.file.filename
        const update = await Slider.findByIdAndUpdate(req.params.id,formdata)
        if(req.file){
            const paths = 'public/img' + update.img
            fs.unlink(paths, function(err){
                res.status(404).send({err:'Slider is not delete file'})
            })
        }
        res.send(update)
    }

    static async getSlider(req, res){
        const slider = await Slider.find({})
        res.send(slider)
    }

}

    


// module.exports = new Slidercontroller
module.exports.Sliderscontroller = Sliderscontroller