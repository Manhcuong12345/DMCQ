const Product = require('../models/Product')
// const _ = require('lodash')
const slugify = require('slugify')

class Productcontroller {

    static async createProduct(req, res) {
       
        const { name,description, content, quantity ,category, price, offer, createdBy,price_sell } = req.body
        //Kiem tra file phan hoi
        let product_img = []
        if (req.files.length > 0) {
            product_img = req.files.map(file => {
                return { img: file.filename }
            })
        }

        const product = new Product({
            name: name,
            slug: slugify(name),
            price,
            price_sell,
            quantity,
            description, content, category,
            product_img,
            offer,
            createdBy: req.user._id
        })
         product.save() 
         if(!product) return res.status(400).send({error_message:'Not save product'})
         res.send(product)
    }

    static async deleteProduct(req, res) {
        const deletep = await Product.findByIdAndDelete(req.params.id)
        if (!deletep) res.status(404).send({ error: 'Product not delete' })
        res.status(200).send({message: 'Product delete success!'})
    }

    static async getAll(req, res) {
        //Loc san pham theo danh muc
        let filter = {}
        if(req.query.Category_Product){
            filter = { category: req.query.Category_Product.split(',')}
        }
        const productList = await Product.find(filter).populate('category')
        if (!productList) res.status(404).send({ error: 'Not Found' })
        res.status(200).send(productList)
    }

    //Lay tung danh sach product 
    static async detailProduct(req, res) {
        const product = await Product.findById(req.params.id).populate('category')
        if(!product) res.status(404).send({ error: 'Not found'})
        res.status(200).send(product)
    }

    static async updateProduct(req, res) {
        const formdata = req.body
        const update = await Product.findByIdAndUpdate(req.params.id, formdata)
        if (!update) res.status(404).send({ error: 'Product not update' })
        res.send(update)
    }


}


module.exports.Productcontroller = Productcontroller