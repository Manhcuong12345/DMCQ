const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const routes = require('./start_up/routes')
const app = express()

app.use(express.static('public'))
db.connect()
app.use(bodyParser.urlencoded({extended:false}))

routes(app)

//Dua len internet
const PORT = process.env.PORT || 2000

app.listen(PORT,()=>{
    console.log('Sever is running')
})
