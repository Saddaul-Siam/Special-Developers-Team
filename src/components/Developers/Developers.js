import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css'
const Developers = () => {
  const [developers, setDevelopers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setDevelopers(data))
  }, [])
  const handleAddToCart = (developer) => {
    const newCart = [...cart, developer]
    setCart(newCart);
  }
  return (
    <div>
      <div className='header'>
        <h1>Make An Super Special Developers Team</h1>
        <h4>Secret project</h4>
        <h2>Total Budget: 100 Million</h2>
      </div>
      <div className='layout'>
        <div className='developer-container'>
          {
            developers.map(developer => <Developer
              key={developer.key}
              developer={developer}
              handleAddToCart={handleAddToCart}
            ></Developer>)
          }
        </div>
        <div className="card-container">
        <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Developers;
