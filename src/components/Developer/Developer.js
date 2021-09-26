import React from 'react';
import './Developer.css'
const Developer = (props) => {
  // console.log(props);
  const { name, experience, skill, img, salary,country } = props.developer;
  return (
    <div id='' className=''>
      <div className='single-card'>
        <img width='350px' height='400px' src={img} alt="" />
        <h2>Name: {name}</h2>
        <h4>skill: {skill}</h4>
        <h5>experience: {experience}</h5>
        <h5>country: {country}</h5>
        <h6>salary: {salary}</h6>
        <button onClick={()=>props.handleAddToCart(props.developer)} className="btn btn-info text-white text-center px-5 fs-5 rounded-3 f"><i class="fas fa-cart-plus"></i> Add to cart</button>
      </div>
    </div>
  );
};

export default Developer;