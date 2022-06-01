import { createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const ContactSlice = createSlice ({
    name:'contactee',
    initialState : [{
        id : uuidv4(),
        name:'shakira',
        age : 40,
        email : "shakira@gmail.com"
    }],
  reducers : {
      addContactee : (state, action)=>{
          const newContactee = {
              id : uuidv4(),
              ...action.payload
          }
          return [...state,newContactee]
      },
      setContacts : (state,action)=>{
          return action.payload
      }
  }

})


export const {setContactees,addContactee} = ContactSlice.actions

export default ContactSlice.reducer


