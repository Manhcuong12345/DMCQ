const mongoose = require('mongoose');
const Schema = mongoose.Schema


const Order = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            },
            number: {
                type: Number,
            },
        }
    ],
    totalprice: {
        type: Number
    },
    status: {
        type: String,
        default:'Pending',
        required: true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category_Product'
    }
    // paymentType: {
    //     type: String,
    //     enum: ['home', 'card']
    // }
});

module.exports = mongoose.model('Order', Order);