import React, { useEffect, useState } from 'react'
import Axios from "axios"
import Data from './Data'
import AddUser from './AddUser'
const Usersdata = () => {
    const[users,setuser]=useState([])
    useEffect(()=>{
Axios.get(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
    setuser(response.data)
}).catch(()=>{})
    },[])



    const onAdd = async (name, email) => {
        await fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => {
            if (res.status !== 201) {
              return;
            } else {
              return res.json();
            }
          })
          .then((data) => {
            setuser((users) => [...users, data]);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    //   
    const onDelete = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.status !== 200) {
              return;
            } else {
              setuser(
                users.filter((user) => {
                  return user.id !== id;
                })
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    

  return (
    <div className='App'>
      


        <br />
        <AddUser onAdd={onAdd}/>
        <div>
            {
              users.map((user)=>(
                <Data id={user.id} key={user.id} name={user.name} email={user.email} onDelete={onDelete} />
              ))
            }
        </div>

    </div>
  )
}

export default Usersdata