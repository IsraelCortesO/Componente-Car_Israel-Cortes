import React from 'react';
import './style.css';
import Car from './Car.js';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Car
        nombre="Rayo McQueen"
        modelo="Chevrolet Corvette C6"
        imagen="https://assets.stickpng.com/images/59db69d33752880e93e16efc.png"
        descripcion="El auto mas veloz de la serie de peliculas de Cars."
        style={{ margin: '6px' }}
        sonido= "Ku-chow"
        anio= "2006"
      />
      <Car
        nombre="Mate"
        modelo="International L-170"
        imagen="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/02/mate-cars-2244153.jpeg?itok=PfP_5Reb"
        descripcion="El Compañero fiel de McQueen"
        style={{ margin: '6px' }}
        sonido= "Mate Tom-Mate"
        anio= "1960"
      />
    </div>
  );
}