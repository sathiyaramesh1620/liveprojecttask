import React from 'react'
import "./SearchImage.css"
import Axios from 'axios'
import { useState } from 'react'
import Image from './Image'
const SearchImage = () => {
const [image,setImage]=useState([])

    const fetchAPI= async()=>{
        const response=await Axios.get('https://api.unsplash.com/photos/?client_id=NcY6yj-yfZgfGUW3_TSzU35j71XL3rsxGvX8-g3RZ8k');
        console.log(response.data)
        const data=await response.data
        setImage(data)

    }
  return (
    <div className='container'>
        <br /><br />
        <button className='btn btn-primary btn-md'
        onClick={fetchAPI}
         >Fetch unsplash  API</button>
        <br /><br />
        <div className='photos'>
{
image.length>0 &&(
    <Image image={image}/>
)
}
        </div>
    </div>
  )
}

export default SearchImage 