import axios from 'axios';

export const fetchContactees =async()=>{
    const {data} = await axios.get (`${process.env.REACT_APP_API_BASE_URL}/api/user`)
    return data
}

export const postContactee =async (values)=>{
     const addingContactee = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/user`,{...values})
}


export const updateCont = async (id,value)=>{
    const updateContactee = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`,value)
}

export const GetUniqueContactee = async (id, value) =>{
    const {data} = await axios.get (`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`,value)
    return data
}

export const deletContactee = async (id) =>{
    const deleteContactee = await axios.delete (`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`)
}

