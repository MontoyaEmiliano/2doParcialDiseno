import React, { useState } from 'react';

const Pago = ({ orden, clearOrden }) => {
  const [mensaje, setMensaje] = useState(''); 

  const realizarPago = () => {
    if (orden.length > 0) {
      setMensaje('¡Orden pagada correctamente!, lo quiero profe'); 
      clearOrden(); 
    } else {
      setMensaje('No hay platillos en la orden.'); 
    }
  };

  return (
    <div className="seccion-pago">
      <button onClick={realizarPago}>Pagar</button>
      {mensaje && (
        <div className="mensaje">
          <p>{mensaje}</p>
        </div>
      )}
    </div>
  );
};

export default Pago;
