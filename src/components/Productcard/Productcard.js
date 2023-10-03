import React from 'react';
import './Productcard.css'

const Productcard = ({img,discription,price}) => {
  return (
    <div>
      <div className='product-card'>
<img src={img} className='product-img'></img>
<h3>{discription}</h3>
<h3>{price}</h3>
      </div>
    </div>
  )
}

export default Productcard
