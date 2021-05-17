const express = require('express')
var bodyParser = require('body-parser')
const db = require('./db')
const dotenv = require('dotenv')
const cors = require('cors')
const routes = require('./start_up/routes')
const app = express()

dotenv.config()


const corsOptions ={
    "origin":"*",
    "methods":"GET,POST,PUT,DELETE",
    "allowHeaders":"*"
}
app.use(cors(corsOptions))


// app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

db.connect()

routes(app)

//Dua len internet
const PORT = process.env.PORT || 2000

app.listen(PORT,()=>{
    console.log('Sever is running')
})
