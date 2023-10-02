import React from 'react';
import Sweets from './../../utils/Sweets.json';
import Sweetcard from '../../components/Sweetcard/Sweetcard';

import { Link } from 'react-router-dom';




const Home = () => {
 
  
  return (<>
<h2 className='text-center'>Sweets</h2>
<div className='d-flex contaier  justify-content-around  '>


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
      
     
    </>
  )
}

export default Home
