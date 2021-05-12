
const authRoute = require("../route/auths")
const userRoute = require("../route/users")
const sliderRoute = require("../route/slider")
const productRoute = require("../route/product")
const orderRoute = require("../route/order")
const categoryRoute = require("../route/category")
const cartRoute = require("../route/cart")



module.exports = function (app) {

    app.use('/api/auth', authRoute)
    app.use('/api/user', userRoute)
    app.use('/api/slider', sliderRoute)
    app.use('/api/product', productRoute)
    app.use('/api/order', orderRoute)
    app.use('/api/category', categoryRoute)
    app.use('/api/cart',cartRoute)

}