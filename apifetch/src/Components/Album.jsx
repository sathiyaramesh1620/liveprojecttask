import React from 'react'
import { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';

import Table from 'react-bootstrap/Table';
import Axios from 'axios'
const Album = () => {
     let[photo,setPhoto]=useState([])

    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/photos').then((response)=>{
            console.log(response.data)
            setPhoto(response.data.slice(0,20))
        }).catch()
    },[])
  return (
    <div>
        <pre>{JSON.stringify(photo)}</pre>
        <Container>
            <h1 className=' d-flex justify-content-center'>Employe Data</h1>
        <pre>{JSON.stringify(photo)}</pre>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th> Name</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
            photo.map((p)=>{
                return <tr>
                    <td>{p.id}</td>
                    <td>{p.title}</td>
                    <td><img src={p.url} alt="" width={100} /></td>
                  <td><img src={p.thumbnailUrl} alt="" width={100} /></td>
                    
                </tr>
            })
        }
      </tbody>
    </Table>
        
    </Container>

       
    </div>
  )
}

export default Album