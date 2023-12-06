import React from 'react'
import Individualimage from './Individualimage'
const Image = ({image}) => {
  return image.map((i)=>(
    <Individualimage key={i.id}
    i={i}
    />
  ))
}

export default Image