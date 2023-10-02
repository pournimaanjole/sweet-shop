import React from 'react';
import './Sweetcard.css'

const Sweetcard = ({img,tittle}) => {
  return (
    <div>
      
      <div className='sweet-container   '>
        <img src={img } className='sweet-img'></img>
        <span className='sweet-tittle'>{tittle}</span>
      </div>
    </div>
  )
}

export default Sweetcard
