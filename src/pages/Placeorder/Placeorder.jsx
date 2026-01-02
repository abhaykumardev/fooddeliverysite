import React, { useContext } from "react";
import './Placeorder.css'
import { Storecontext } from "../../Context/Storecontext";

const Placeorder = () => {
  const { gettotalamount } = useContext(Storecontext);

  // --- Fixed: define needed values ---
  const subtotal = gettotalamount();
  const deliveryFee = 2.0; // adjust as needed
  const discount = 0; // add discount logic when ready
  const grandTotal = subtotal + deliveryFee - discount;

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      {/* Fixed typo: plave-order-right → place-order-right */}
      <div className="place-order-right">
        <div className="cart-total-details">
          <div className="detail-row">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>

          <div className="detail-row">
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>

          {discount > 0 && (
            <div className="detail-row">
              <p>Discount</p>
              <p>-${discount.toFixed(2)}</p>
            </div>
          )}

          <div className="detail-row total">
            <p>Grand Total</p>
            <p>${grandTotal.toFixed(2)}</p>
          </div>

          <button className="checkout-btn">
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
