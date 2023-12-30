import React from 'react'
import { Link } from 'react-router-dom'
const Card = (props) => {

    const{id,image,title,price,description,category} = props.data
  return (
    <>
    
  <div className="col">
    <div className="card">


      <h1>{id}</h1>
      <img src={image} className="card-img-top" alt="{title}"/>
      <div className="card-body">
        <h3>{category}</h3>
        <h5 className="card-title">{title.slice(0,30)}...</h5>
        <h4>${price}</h4>
        <Link to= {`./description/${id}`} className='btn btn-primary'>View Details</Link>
        
      </div>
    </div>
  </div>
  
    </>
  )
}

export default Card