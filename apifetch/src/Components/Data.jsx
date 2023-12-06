import React from 'react'
import "./Data.css"
const Data = ({id,email,name,onDelete}) => {

    
    const handleDelete = () => {
        onDelete(id);
    }

  return (
    <div className='list'>
        <span>{id}</span>
        <span>{email}</span>
        <span>{name}</span>
        <span>
            <button>edit</button>
            <button onClick={handleDelete}>delete</button>
            
        </span>
        

    </div>
  )
}

export default Data