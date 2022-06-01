const express = require ('express')
const connectdbb = require('./config/connectdbb')
const ContacteeRouter = require ('./routes/contactee')
const app = express ()
const port = 5002

require ('dotenv').config()
var cors = require('cors')

connectdbb()
app.use(express.json())
app.use('/api/user', ContacteeRouter)
app.use(cors())

app.listen(port, err=>{
    err?console.log(err):console.log(`Good job go to ${port}`)
})
