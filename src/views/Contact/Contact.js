import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  Config from './../../utils/Config.json';
import { useState } from 'react';

const Contact = () => {
  const {id} = useParams();
  const [ post, setpost] = useState({});

  useEffect(()=>{
    Config.servises.forEach((post)=>{
if(post.id == id){
  setpost(post);
}
    })
  },[id])
  return (<>
    <div>
      contact {id}
      <h1>{post.tittle}</h1>
      <h2>{post.price}</h2>
    </div>
    </>
  )
}

export default Contact
