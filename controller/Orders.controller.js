const Order = require('../models/Order')
const User = require('../models/User')
const _ = require('lodash')


class Orderscontroller {

  static async createOrder(req, res) {
    const user = await User.findById(req.user._id)
    if (!user) return res.status(404).send({ err_message: "User not found" })
    const products = user.cart.map(i => {
      return { number: i.number, product: i.product }
    })
    //Tong tien san pham
    products.totalprice = user.cart.reduce((total, item) => {
      return total + item.number * item.price
    }, 0)

    const { status } = req.body

    const order = await new Order({
      products: products,
      status: status,
      totalprice: products.totalprice,
    })

    order.save()
    if (!order) return res.status(400).send({ err_message: 'Is not save !' })
    res.send(order)
  }


  static async updateStatus(req, res) {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body)
    if (!order) return res.status(400).send({ message: ' Is not update status!' })
    res.send(order)
  }

  static async getOrder(req, res) {
    const order = await Order.find({})
      .populate({ 
        path: 'products', populate: { 
        path: 'product',populate: 'category' }})
    if (!order) return res.status(404).send({ message: 'Not found!' })
    return res.status(200).send(order)
  }

}


module.exports.Orderscontroller = Orderscontroller