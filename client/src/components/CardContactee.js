import React from "react";
import {Card} from 'react-bootstrap';
import { useNavigate } from "react-router";
import { deletContactee } from "../api/Contactee";




const CardContactee =({contactee, GetContactee})=>{
  console.log('contactee', contactee.id)
 let navigate = useNavigate()

 const update = () =>{
     navigate(`/update/${contactee._id}`)
 }



    return(
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
       <button onClick={async()=>{await deletContactee(contactee._id);GetContactee()}}>X</button>
       <button onClick={()=>update()}>modify</button>
        <Card.Title>{contactee.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Card.Link href="#">{contactee.email}</Card.Link>
        <Card.Link href="#">{contactee.age}</Card.Link>
      </Card.Body>
    </Card>
    </div>
    )
}


export default CardContactee


