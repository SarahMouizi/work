import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { updateCont, GetUniqueContactee } from '../api/Contactee'


const Update = () => {
  const {id} = useParams()
let navigateus = useNavigate ()
console.log('here', id)
const [name, setName]= useState('')
const [age, setAge] = useState('')
const [email, setEmail] = useState('')

const getContacteeById = async (contacteeId)=>{
  const data = await GetUniqueContactee(contacteeId)
  console.log('dataGetUnique', data)
  setName(data.getuser.name)
  setAge(data.getage.age)
  setEmail(data.getemail.email)
}

useEffect(()=>{
 if(id) {getContacteeById(id)}
},[id])

const handelSubmit = async  (contacteeId, Value)=>{
  await updateCont (contacteeId, Value)
  navigateus('/contactees')
}




  return (
    <div>
     
   <div >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value = {name}
          onChange = {(e)=>setName(e.target.value)}
    
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          name="age"
          value = {age}
          onChange = {(e)=>setAge(e.target.value)}
        />
      </label>
      <label>
        email:
        <input
          type="text"
          name="email"
          value = {email}
          onChange = {(e)=>setEmail(e.target.value)}

        />
      </label>
      <button onClick={()=>handelSubmit(id,{name, age, email})} >update user </button>
   
    </div>

  </div>
  )
}

export default Update