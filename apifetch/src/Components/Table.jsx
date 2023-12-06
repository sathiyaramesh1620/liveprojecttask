import React, { useEffect, useState } from 'react'
 import Container from 'react-bootstrap/Container';
import Axios from 'axios'
 import Table from 'react-bootstrap/Table';
const Tables = () => {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            console.log(response.data)
            setUsers(response.data)
        }).catch()
    },[])
  return (
    <div>
        <Container>
            <h1 className=' d-flex justify-content-center'>Employe Data</h1>
        <pre>{JSON.stringify(users)}</pre>
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
            users.map((user)=>{
                return <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            })
        }
      </tbody>
    </Table>
    </Container>
    </div>
  )
}

export default Tables