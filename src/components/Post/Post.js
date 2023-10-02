import React from 'react'
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({ id ,tittle,description,price  ,img}) => {
  return (
    <div>
     <div className='post-card'>
     <h1>{tittle}</h1>
      <p>{description}</p>
      <h3>{price}</h3>
      <img src={img} alt=''></img> <br/>
     <Link to={`/readpost/contact/${id}`}>read more</Link>
     </div>
    </div>
  )
}

export default Post
