const ContacteeSchema = require('../model/contactee')


exports.GetContactee =  async (req,res)=>{
    try{
    const Contactees = await ContacteeSchema.find()
    res.status(200).send({msg:'this is the list', Contactees})
    }catch(err){
       res.status(500).send({msg: 'sorry u couldnt add it'})
    }
    }

exports.AddContactee =   async (req,res)=>{
    try{
const NewContactee =  new ContacteeSchema(req.body)
await NewContactee.save()
res.status(200).send({msg:'this is the new user', NewContactee})
    }catch(err){
        console.log(err.message)
       res.status(500).send({msg: 'sorry u couldnt add it'})
    }
}  

exports.UpdateContactee = async (req,res)=>{
    try{
const {id} = req.params
const UpdateContactee = await ContacteeSchema.findByIdAndUpdate(id, {$set:{...req.body}})
res.status(200).send({msg: " updated done", UpdateContactee})
    }catch(err){
        res.status(500).send({msg: 'sorry u couldnt change it'})
    }
}

exports.DeleteContactee = async(req,res)=>{
    try{
const {id} = req.params
const DeleteContactee = await ContacteeSchema.findByIdAndDelete(id) 
res.status(200).send({msg : "deleted done", DeleteContactee})
    }catch(err){
        res.status(500).send({msg: 'sorry '}) 
    }
}

exports.GetUnique = async(req,res)=>{ 
    try{
        const {id} = req.params
        const GetUnique = await ContacteeSchema.findById(id)
        res.status(200).send({msg:'u did it this is ur user',GetUnique })
    }catch(err){
        res.status(500).send({msg:'error u couldnt get it'}) 
    }
    }