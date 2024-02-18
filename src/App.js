import React, { useState } from 'react';
import ClassSchedule from './components/ClassSchedule';
import Cart from './components/Cart';

const App = () => {
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);

    const removeFromCart = (classId) => {
        const updatedCart = cart.filter(id => id !== classId);
        setCart(updatedCart);
    };

    return (
        <div className="App">
            <header>
                <h1>Online Class Booking</h1>
                <button onClick={() => setShowCart(!showCart)}>
                    {showCart ? 'Show Class Schedule' : 'Show Cart'}
                </button>
            </header>
            <main>
                {showCart ? (
                    <Cart cart={cart} removeFromCart={removeFromCart} />
                ) : (
                    <ClassSchedule cart={cart} setCart={setCart} />
                )}
            </main>
        </div>
    );
};

export default App;
