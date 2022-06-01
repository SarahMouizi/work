import React, { useState, useEffect} from 'react'
import { postContactee} from '../api/Contactee'
import { useNavigate } from 'react-router'




const Add = () => {
  let navigate = useNavigate();
const [name,setName]= useState('') 
const [age, setAge] = useState('')
const [email, setEmail] = useState('')
  
  const handleSubmit=async (value)=>{
  await postContactee(value)
  navigate ('/contactees')
}


  return (
    <div>
     
   <div >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          Onchage ={(e)=>setName(e.target.value)}
   
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={age}
          Onchage ={(e)=>setAge(e.target.value)}
        />
      </label>
      <label>
        email:
        <input
          type="text"
          name="email"
          value={email}
          Onchage ={(e)=>setEmail(e.target.value)}

        />
      </label>
      <button onClick={()=>handleSubmit({name,age,email})}>Add user </button>
   
    </div>

  </div>
  )
}

export default Add