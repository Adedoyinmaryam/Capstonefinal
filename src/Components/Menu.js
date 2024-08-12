import React, { useState } from 'react';

import GreekSalad from './icons_assets/greek salad.jpg?url';
import Bruschetta from './icons_assets/Bruchetta.jfif?url';
import LemonDessert from './icons_assets/Lemon dessert.jfif?url';

function Menu() {
  const [order, setOrder] = useState({
    GreekSalad: 0,
    Bruschetta: 0,
    LemonDessert: 0,
  });

  const handleAddItem = (item) => {
    setOrder((prevOrder) => ({ ...prevOrder, [item]: prevOrder[item] + 1 }));
  };

  const handleRemoveItem = (item) => {
    setOrder((prevOrder) => ({ ...prevOrder, [item]: Math.max(0, prevOrder[item] - 1) }));
  };

  return (
    <div className="menu-container">
      <div className="menu-item">
        <img src={GreekSalad} alt="Greek Salad" />
        <h1 className="menu-title">Greek Salad</h1>
        <p className="menu-description">The salad is dressed with a generous splash of high-quality extra virgin olive oil, a sprinkling of dried oregano, and sometimes a dash of red wine vinegar. </p>
        <div className="button-container">
          <button className="add-button" onClick={() => handleAddItem('GreekSalad')}>Add to Order</button>
          <span className="quantity">{order.GreekSalad}</span>
          <button className="remove-button" onClick={() => handleRemoveItem('GreekSalad')}>Remove from Order</button>
        </div>
      </div>
      <div className="menu-item">
        <img src={Bruschetta} alt="Bruschetta" />
        <h1 className="menu-title">Bruschetta</h1>
        <p className="menu-description">The most traditional version of bruschetta, known as "bruschetta al pomodoro," consists of a slice of rustic Italian bread that is grilled or toasted until it is crispy.</p>
        <div className="button-container">
          <button className="add-button" onClick={() => handleAddItem('Bruschetta')}>Add to Order</button>
          <span className="quantity">{order.Bruschetta}</span>
          <button className="remove-button" onClick={() => handleRemoveItem('Bruschetta')}>Remove from Order</button>
        </div>
      </div>
      <div className="menu-item">
        <img src={LemonDessert} alt="Lemondessert" />
        <h1 className="menu-title">Lemon Dessert</h1>
        <p className="menu-description">A simple lemon pound cake glazed with lemon icing to a more elaborate layered cake filled with lemon curd and frosted with lemon buttercream. </p>
        <div className="button-container">
          <button className="add-button" onClick={() => handleAddItem('LemonDessert')}>Add to Order</button>
          <span className="quantity">{order.LemonDessert}</span>
          <button className="remove-button" onClick={() => handleRemoveItem('LemonDessert')}>Remove from Order</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;