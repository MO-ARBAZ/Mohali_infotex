import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((classId, index) => (
                    <li key={index}>
                        Class ID: {classId}
                        <button onClick={() => removeFromCart(classId)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
