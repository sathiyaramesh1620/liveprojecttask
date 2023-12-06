import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Table from 'react-bootstrap/Table';

import Container from 'react-bootstrap/Container';
const Photo = () => {

   let [photo,setPhoto]= useState([])

   useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        console.log(response.data)
        setPhoto(response.data)
    }).catch(()=>{})
   })
  return (
    <div>
        <pre>{JSON.stringify(photo)}</pre>

        <Container>
        <h1 className=' d-flex justify-content-center'>Employe Data2</h1>
       
      <Table responsive="md">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESC</th>
           
          </tr>
        </thead>
        <tbody>
        {
         photo.map((p)=>{
            return <tr>
                <td>{p.userid}</td>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.body}</td>
                

            </tr>

         })
        }
        </tbody>
      </Table>
      

        </Container>
    </div>
  )
}

export default Photo