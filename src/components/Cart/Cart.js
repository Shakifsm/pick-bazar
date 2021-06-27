import React from 'react';
import "./Cart.css"

const Cart = () => {
    return (
        <div>
            <button className="sticky-cart-btn">
                <span className="cart-items">0 items</span>
                <span className="cart-total">$0.00</span>
            </button>
        </div>
    );
};

export default Cart;