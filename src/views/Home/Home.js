import React from 'react';
import Sweets from './../../utils/Sweets.json';
import Sweetcard from '../../components/Sweetcard/Sweetcard';
import Product from './../../utils/Product.json';
import Productcard from '../../components/Productcard/Productcard';
import herosection from './heto.jpeg';
import './Home.css';

import { Link } from 'react-router-dom';




const Home = () => {
 
  
  return (<>
  
<h2 className='text-center'>Sweets</h2>
<div className='d-flex contaier container justify-content-around  '>


{
  Sweets.map((sweet,index)=>{
    const {img,tittle} = sweet ;
   return(
    <>
   <Sweetcard img={img} tittle={tittle} />
    </>
   )

  })
}


</div>
<h2 className='text-center'>Product</h2>
      <div className='d-flex container justify-content-around'>
      {
  Product.product.map((product,index)=>{
const {img, discription,price} = product;
return(<>
<Productcard img={img} discription={discription} price={price}/> 
</>)
  })
}
      </div>
     
    </>
  )
}

export default Home
