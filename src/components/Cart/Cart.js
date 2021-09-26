import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const developer of cart) {
    total = total + developer.salary;
  }
  return (
    <div>
      <div className="cart" id="my-cart">
        <table className="table">
          <tbody>
            <tr>
              <th>Developers Added:</th>
              <td>${props.cart.length}</td>
            </tr>
            {/* <tr>
              <th>{props.name}</th>
              <td>${}</td>
            </tr> */}
            <tr>
              <th>Total Cost:</th>
              <td>$ {total}</td>
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

  );
};

export default Cart;