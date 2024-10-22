import React from 'react';

const Menu = ({ menuItems, addToOrden }) => {
  return (
    <div>
      <h2 className='text-center' >Menú</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} :  
            <div>{item.description}</div>
            <button onClick={() => addToOrden(item)}>Agregar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
