import React, { useContext, useState } from 'react';
import './Cart.css';
import { Storecontext } from '../../Context/Storecontext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItem, food_list, removeFromCart, gettotalamount } = useContext(Storecontext);
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const deliveryFee = 3;

  // Apply promo code logic
  const applyPromo = () => {
    if (promoCode === 'DISCOUNT10') {
      setDiscount(gettotalamount() * 0.1); // 10% discount
      alert('10% discount applied!');
    } else {
      setDiscount(0);
      alert('Invalid promo code');
    }
  };

  const grandTotal = gettotalamount() + deliveryFee - discount;

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list
          .filter(item => cartItem[item._id] > 0)
          .map(item => (
            <div key={item._id} className='cart-items-title cart-items-item'>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItem[item._id]}</p>
              <p>${item.price * cartItem[item._id]}</p>
              <p onClick={() => removeFromCart(item._id)} style={{ cursor: 'pointer', color: 'red' }}>x</p>
            </div>
        ))}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <div className="detail-row">
              <p>Subtotal</p>
              <p>${gettotalamount().toFixed(2)}</p>
            </div>

            <div className="detail-row">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>

            {discount > 0 && (
              <div className="detail-row">
                <p>Discount</p>
                <p>-${discount.toFixed(gettotalamount()===0?0:2)}</p>
              </div>
            )}

            <div className="detail-row total">
              <p>Grand Total</p>
              <p>${grandTotal.toFixed(2)}</p>
            </div>

            <button onClick={() => navigate('/checkout')} className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>

          <div className="cart-promocode">
            <p>If you have a promo code, enter it here:</p>
            <div className="promo-code-input">
              <input
                type="text"
                placeholder='Promocode'
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={applyPromo}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
