const express = require ('express')
const ContacteeRouter = express.Router()
const { Route } = require('express');
const {GetContactee,AddContactee,UpdateContactee,DeleteContactee,GetUnique } = require ('../controllers/contactee')



//route get all user
ContacteeRouter.get('/',GetContactee)


//route post a user
ContacteeRouter.post('/',AddContactee )


//route put or update a user => id
ContacteeRouter.put('/:id',UpdateContactee )


//route delet user => id
ContacteeRouter.delete('/:id',DeleteContactee)


//route get a unique user => id
ContacteeRouter.get('/:id', GetUnique)


module.exports =  ContacteeRouter