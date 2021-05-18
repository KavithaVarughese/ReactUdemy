import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CardProvider';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCardHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCard={showCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
