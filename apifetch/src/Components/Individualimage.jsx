import React from 'react'

const Individualimage = ({i}) => {
  return (
    <div className='photo'>
        <img src={i.urls.small} alt="" />
    </div>
  )
}

export default Individualimage