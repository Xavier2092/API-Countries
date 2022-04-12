import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../redux/actions';
import './Details.scss'

export default function Details(){
  const {id} = useParams();
  
  const dispatch = useDispatch();
  const countryDetail = useSelector((state)=> state.details);
  
  
  useEffect(()=> {
    dispatch(getDetails(id));
  },[])
  

  return (
    <div className='details'>
      {
        countryDetail.hasOwnProperty("nameCountry") ?
        <div>
          <div className='countDet'>
            <div className='content'>
              <div className='images'>
                <img src={countryDetail.flag} alt='Bandera' className='fladet'/>
              </div>
              <h2 className='coudet'>{countryDetail.nameCountry}</h2>
              <h3><i>Capital:</i>  {countryDetail.capital[0]}</h3>
              <h4><i>Codigo:</i>  {countryDetail.id}</h4>
              <h4><i>Subregión:</i>  {countryDetail.subregion}</h4>
              <h4><i>Área:</i>  {parseInt(countryDetail.area).toLocaleString('de-DE')} Km2</h4>
              <h4><i>Población:</i>  {countryDetail.population.toLocaleString('de-DE')}</h4>
            </div>
          </div>
          <div className='activity'>
            <div className='content'>
            <h2><i>Actividades:</i></h2>
            <br/>
              {
                countryDetail.tourist_activities?.length > 0 
                ? countryDetail.tourist_activities?.map(act => (
                  <p key={act.id}>
                    <li className='titleAct'>Actividad: {act.nameActivity}</li>
                    <li>Temporada: {act.season}</li>
                    <li>Duración: {act.span}</li>
                    <li>Dificultad: {act.difficulty}</li>
                    <br/>
                  </p>
                )) : <h2 className='noActivity'>¡No tiene actividades!</h2>
              }
            </div>
          </div>
        </div> : <p>Buscando.....</p>
      }

      
          <div className='back'><Link to='/home' className='back'>⬅ Regresar</Link></div>
      
    </div>
  )
}

