const mongoose  = require('mongoose')




const ContacteeSchema = mongoose.Schema({
    name : String, 
    age : Number, 
    email : {
        type : String,
        required : true,
        unique : true,
    }
})


module.exports = mongoose.model('testxcontactee', ContacteeSchema)



