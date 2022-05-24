import React from 'react';
import { useState } from 'react';
import { useDispatch, /* useSelector */ } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCountryName } from '../../redux/actions';
import icono from '../../assets/home.png';
import  './SearchBar.scss';

export default function SearchBar({setCurrentPage}){
  const dispatch = useDispatch();
  const [name, setName] = useState("");



  function handleInputChange(ev){
    console.log(ev.target.value);
    setName(ev.target.value);
    ev.preventDefault();
  }

  function handleSubmit(ev){
    ev.preventDefault();
      if(!name){
        alert('Debe escribir el nombre de algún país.');
      }
    dispatch(getCountryName(name))
    setCurrentPage(1);
  }
  
    return (
      <div className='navbar'>
        <NavLink to="/">
          <img src={icono} alt='Icono' className='icono'/>
        </NavLink>
        
        <NavLink to="/TourActivity" className='actForm'>
              <h4 className='crearActividad'>Crear Actividad</h4>
        </NavLink>
        <div className='search'>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Buscar País' onChange={handleInputChange} value={name} />
            <input type='submit' value='Buscar' className='findBTN'/>
          </form>
        </div>
      </div>
    )
}