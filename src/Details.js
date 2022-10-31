import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropType from 'prop-types'

 const Details = (props) => {
    const{empid}=useParams()
    console.log(empid) 
    const [empdata,empdatachange]=useState({})
    useEffect(()=>{
        fetch("http://localhost:8080/api/getproject/"+empid)
        .then((responce) => {
                return responce.json();
              })
              .then((responce) => {
                empdatachange(responce.data);
               
              })
              .catch((error) => {
                console.log(error.message);
              });
    },[])
  return (
    <div>
      {  empdata && <h1>The Project Name is:{empdata.projectName} </h1>}
    </div>
  )
}
export default Details;