import React, { useEffect } from 'react';
import CardContactee from './CardContactee';
import {setContactees} from '../store/ContactSlice';
import { useDispatch, useSelector } from 'react-redux';
import {fetchContactees} from '../api/Contactee'



const ListContactee = () =>{

    const dispatch = useDispatch()
    const Contactees = useSelector(state=>state.contactee)

    const GetContactee =async () =>{
    const data = await fetchContactees()
    dispatch (setContactees(data.Contactees))
    }
    useEffect (()=>{
        GetContactee();
    },[])



    return(
        <div>
            {
                Contactees.map((el)=>(<CardContactee contactee={el} GetContactee={GetContactee}/>))
            }
          
            </div>
    )
}

export default ListContactee


