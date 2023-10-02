import React from 'react';
import Config from './../../utils/Config.json';
import Post from '../../components/Post/Post';

const Readpost = () => {
  return (
    <div>
      readpost
{/*  */}

<div>
      <button className='btn btn-primary'>hello rani</button>

      <div>
        <h1>{Config.tittle}</h1>
        <h3>{Config.description}</h3>
        

        {Config.servises.map( (servisedetail , index) => {
          const { id,tittle, description, price,img} =servisedetail;
     return(<>
     <Post key={index} id={id} tittle={tittle} description={description} price={price} img={img} />
     </>
      
     )
        })
      }
      </div>
    </div>

{/*  */}

    </div>
  )
}

export default Readpost
