import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postTourActivity, getOnlyCountries } from '../../redux/actions';
import styled from 'styled-components';
import './TourActivity.scss';

/* const Pais= styled.h4`
 `;  */

function validate(input){
  let error = {};
  if(!input.nameActivity){
    error.nameActivity = "Se requiere el nombre de la actividad";
  }
  if(!input.span){
    error.span = "Se requiere la duracion";
    }

  return error;
}

export default function TourActivity(){
  
  const dispatch = useDispatch();
  const getBack = useNavigate();
  const onlyCountries = useSelector((state)=> state.onlyCountries);
  const [error, setError] = useState({
    nameActivity: "Se requiere el nombre de la actividad",
    span: ""
  });

  const [input, setInput] = useState({
    nameActivity: "",
    difficulty: "",
    span: "",
    season: "",
    country: []
  })

  useEffect(()=> {
    dispatch(getOnlyCountries());
  },[]);

  function handleChange(ev){
    setInput({
      ...input,
      [ev.target.name]: ev.target.value
    })
    setError(validate({
      ...input,
      [ev.target.name]: ev.target.value
    }));
  }

  function handleCheck(ev){
    setInput({
      ...input,
      season: ev.target.value
    })

    setError(validate({
      ...input,
      [ev.target.name]: ev.target.value
    }));
  }

  function handleSelect(ev){
    setInput({
      ...input,
      country: [...input.country, ev.target.value]
    })
    setError(validate({
      ...input,
      [ev.target.name]: ev.target.value
    }));
  }

  function handleDelete(el){
    setInput({
      ...input,
      country: input.country.filter(oc => oc !== el)
    })
  }

  function handleSubmit(ev){
    ev.preventDefault();

    dispatch(postTourActivity(input))
      
    setInput({
      nameActivity: "",
      difficulty: "",
      span: "",
      season: "",
      country: []
    })

    alert("Se creo la actividad");
    
    getBack('/home')
  }

  return (
    <div className='tourActivity'>
      <h1 className='tourTit'>Creación de actividad turística</h1>
      <form className='formulario' onSubmit={(ev)=> handleSubmit(ev)}>
        <div>
          <label>Actividad Turistica: </label>
          <input 
            type= "text"
            value= {input.nameActivity}
            name= "nameActivity"
            onChange={(ev)=> handleChange(ev)}
          />
          {error.nameActivity && (<p className='error'>{error.nameActivity}</p>)}
        </div>
        <div>
          <label>Dificultad: </label>
          |<input 
            type= "radio"
            value= "1"
            name= "difficulty"
            onChange={(ev)=> handleChange(ev)}
          />1|
          <input 
            type= "radio"
            value= "2"
            name= "difficulty"
            onChange={(ev)=> handleChange(ev)}
          />2|
          <input 
            type= "radio"
            value= "3"
            name= "difficulty"
            onChange={(ev)=> handleChange(ev)}
          />3|
          <input 
            type= "radio"
            value= "4"
            name= "difficulty"
            onChange={(ev)=> handleChange(ev)}
          />4|
          <input 
            type= "radio"
            value= "5"
            name= "difficulty"
            onChange={(ev)=> handleChange(ev)}
          />5|
        </div>
        <div>
          <label>Duración:</label>
          <input 
            type= "text"
            value= {input.span}
            name= "span"
            onChange={(ev)=> handleChange(ev)}
            placeholder="Tiempo en horas"
          />
          {error.span && (<p className='error'>{error.span}</p>)}
        </div>
        <div>
          <label>Temporada:</label>
          <select onChange={(ev)=> handleCheck(ev)}>
            <option disable hidden>Temporada</option>
            <option value= "summer">Verano</option>
            <option value= "autumn">Otoño</option>
            <option value= "winter">Invierno</option>
            <option value= "spring">Primavera</option>
          </select>
        </div>
        <div>
          <label>Paises:  
            <select onChange={(ev)=> handleSelect(ev)} className='selForm'>
                <option disable hidden>Paises</option>
              {onlyCountries.map((oc)=> (
                <option key={oc.nameCountry} value={oc.nameCountry}>{oc.nameCountry}</option>
              ))}
            </select>
          </label>
        </div>
        {input.country.map(el => 
            <div key={el} className='pais'>
              <h4 className='paises'>{el}</h4>
              <button className='botonX' onClick={()=> handleDelete(el)}>x</button>
            </div>)}
        <div>
          <button className='crear' type='submit' disabled={error.nameActivity || error.span ? true : false}>Crear</button>
        </div>
      </form>
          <div className='back'><Link to='/home' className='back'>⬅ Regresar</Link></div>
    </div>
  );
}