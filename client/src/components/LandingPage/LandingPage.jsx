import React from "react";
import { Link } from 'react-router-dom';
import './LandingPage.scss';
import Music from '../../assets/musicbg.mp3';

export default function LandingPage(){
  
  
  return (
    <div className= "landing">
      <h1 className= "titleLand">¡BIENVENIDO A LA API DE PAISES!</h1>
      <Link exact to= "/home" style={{ textDecoration: 'none' }}>
          <div className= "wrap">
            <button className= "buttonLand" >Ingresar</button>
          </div>
      </Link>
      <audio autoPlay>
        <source src={Music} type='audio/mpeg'></source>
      </audio>
    </div>
  );
}