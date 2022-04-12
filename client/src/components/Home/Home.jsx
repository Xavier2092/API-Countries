import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry,
        filterCountryByContinent,
        orderByCountry,
        filterCountryByPopulation,
        getTourActivity,
        countryByActivity } from '../../redux/actions';
import './Home.scss'
import Card from '../Card/Card.jsx';
import Pages from '../Pages/Pages.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';


export default function Home(){
  const dispatch = useDispatch();
  const allCountries = useSelector((state)=> state.country);
  const actTour = useSelector((state)=> state.tourActivity);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryByPage, setCountryByPage] = useState(10);
  const [inOrder, setInOrder] = useState('');

  const indexOfLastCountry = currentPage * countryByPage;
  const indexOfFirstCountry = indexOfLastCountry - countryByPage;
  const currentCountry = allCountries.slice(indexOfFirstCountry,indexOfLastCountry);

  const arrayActTour = actTour && actTour.map(act => act.nameActivity).sort();
  let newActTour = [];

  for (let i = 0; i < arrayActTour.length; i++) {
    if(arrayActTour[i] !== arrayActTour[i+1]){
      newActTour.push(arrayActTour[i]);
    }
  }

  const showPages = (pageNumber)=> {
    setCurrentPage(pageNumber);
  }
  
  useEffect(()=> {
    dispatch(getCountry());
    dispatch(getTourActivity());
  }, [dispatch])

  function handleClick(ev){
    ev.preventDefault();
    dispatch(getCountry());
    window.location.reload();
  }

  function handleFilterContinent(ev){
    ev.preventDefault();
    setCurrentPage(1);
    dispatch(filterCountryByContinent(ev.target.value));
  }
  
  function handleSort(ev){
    ev.preventDefault();
    dispatch(orderByCountry(ev.target.value))
    setCurrentPage(1);
    setInOrder(`Ordenado ${ev.target.value}`)
  }

  function handleSortPopulation(ev){
    ev.preventDefault();
    dispatch(filterCountryByPopulation(ev.target.value))
    setCurrentPage(1);
    setInOrder(`Ordenado ${ev.target.value}`)
  }

    function handleCountryActivity(ev){
    ev.preventDefault();
    dispatch(countryByActivity(ev.target.value))
    setCurrentPage(1);
    setInOrder(`Ordenado ${ev.target.value}`)
  }

  return (
    <div className= "home">
        <SearchBar setCurrentPage={setCurrentPage}/>
        
        <div>
          <div className= "filtros">
            <div>
              <h3 className='findBy'>Busqueda por:</h3>
            </div>
            <div className= "filtro">
              <select onChange={ev=> handleSort(ev)} className='selHome'>
                <option>Alfabeticamente</option>
                <option value='asc'>A - Z</option>
                <option value='desc'>Z - A</option>
              </select>
            </div>
            <div className= "filtro">
              <select onChange={ev=> handleFilterContinent(ev)} className='selHome'>
                <option>Continente</option>
                <option value='Africa'>África</option>
                <option value='Americas'>América</option>
                <option value='Antarctic'>Antártica</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europa</option>
                <option value='Oceania'>Oceanía</option>
              </select>
            </div>
            <div className= "filtro">
              <select onChange={ev=> handleSortPopulation(ev)} className='selHome'>
                <option>Población</option>
                <option value='less'>Menor población</option>
                <option value='high'>Mayor población</option>
              </select>
            </div>
            <div className= "filtro">
              <select onChange={ev=> handleCountryActivity(ev)} className='selHome'>
                <option value={'All'}>Actividad</option>
                { newActTour && newActTour.map(act => <option key={act} value={act}>{act}</option>)}
              </select>
            </div>
            <div>
              <button onClick= {ev=> {handleClick(ev)}} className= "bfiltro">
                Limpiar filtro
              </button>
            </div>
          </div>

          <div className= "cards">
            {
              currentCountry?.map(co=> {
                return (
                  <Card nameCountry={co.nameCountry} continent={co.continent} flag={co.flag} id={co.id} key={co.id}/>
                );
              })
            }
          </div>
          
          <Pages 
              countryByPage = {countryByPage}
              allCountries = {allCountries.length}
              showPages = {showPages}
            />
        </div>
    </div>
  )
}