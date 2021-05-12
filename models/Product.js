const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    name: {
        type: String,
        min: 10,
        max: 30,
    },
    slug: {
        type: String,
        min: 10,
        max: 40
    },
    description: {
        type: String,
        min: 10,
        max: 3000

    },
    content: {
        type: String,
        min: 20,
        max: 3000
    },
    price: {
        type: Number,
    },
    quantity:{
        type: Number,
    },
    discount: {
        type: Number,
    },
    product_img: {
        type: String
    },
    reviews: [
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            review: String
        }
    ],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category_Product',
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})


module.exports = mongoose.model('Product', Product)

