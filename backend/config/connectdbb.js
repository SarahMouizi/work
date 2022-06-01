const mongoose = require ('mongoose')

const connectdbb = async() =>{
    try{
    await mongoose.connect("mongodb+srv://back:G7SJElW0KPdYF0cF@cluster0.jzspewr.mongodb.net/backend?retryWrites=true&w=majority")
     console.log("u are connected")
       }catch(err){
     console.log(err)
    }

}

module.exports = connectdbb ;






