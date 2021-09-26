import React, { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import './Developers.css'
const Developers = () => {
  const [developers, setDevelopers] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setDevelopers(data))
  }, [])
  const handleAddToCart = (developer) => {
    console.log(developer);
  }
  return (
    <div>
      <div className='header'>
        <h1>Make An Super Special Developer Team</h1>
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
          <div className="cart" id="my-cart">
            <table className="table">
              <tbody>
                <tr>
                  <th>Players Added:</th>
                  <td>$ <span id="price">0</span></td>
                </tr>
                <tr>
                  <th>Total Cost:</th>
                  <td>$ <span id="delivery-charge">0</span></td>
                </tr>
              </tbody>
            </table>
            <div className="parces text-center">
              <button className="btn btn-info text-white text-center">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
