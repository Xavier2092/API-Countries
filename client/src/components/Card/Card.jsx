import React from 'react';
import {Link} from 'react-router-dom';
import './Card.scss'


export default function Card({nameCountry, continent, flag,id}){
  return (
    <div className= "country">
      <Link to={`/Country/${id}`}><img className='Bandera' src={flag} alt="No existe bandera"/></Link>
      <h2 className='pais'>{nameCountry}</h2>
      <h4 className='continente'>{continent}</h4>
    </div>
  );
}
