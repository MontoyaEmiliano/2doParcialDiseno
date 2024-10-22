import React from 'react';

const Orden = ({ orden }) => {
  const total = orden.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2 className="text-center">Orden</h2>
      <ul>
        {orden.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Orden;
