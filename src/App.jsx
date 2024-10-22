import React, { useState, useEffect } from 'react';
import Menu from './componentes/menu';
import Orden from './componentes/orden';
import Pago from './componentes/pago';

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [orden, setOrden] = useState([]);

  const API_URL = 'https://api-menu-9b5g.onrender.com/menu'; 

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error al obtener la comida', error);
      }
    };
    fetchMenuItems();
  }, []);


  const addToOrden = (item) => {
    setOrden([...orden, item]);
  };

  const clearOrden = () => {
    setOrden([]);
  };

  return (
    <>
    <div className="App" style={{padding: '50px'}}>
    <h1 >Sistema de Gestión de Menú y Órdenes</h1>
      <Menu menuItems={menuItems} addToOrden={addToOrden} />
      <Orden orden={orden} />
      <Pago orden={orden} clearOrden={clearOrden} />
    </div>
    </>
  );
};

export default App;
