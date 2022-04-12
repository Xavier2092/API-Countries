import React from 'react';
import './Pages.scss';

export default function Pages({countryByPage, allCountries, showPages}){
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries/countryByPage); i++) {
    pageNumbers.push(i);
  }

  return(
    <nav >
      <ul className= "pages">
        { pageNumbers &&
          pageNumbers.map(number =>{
              return (
                <li className= "number" key={number}>
                  <a className='paginacion' onClick={()=> showPages(number)}>{number}</a>
                </li>
              );
          })
        }
      </ul>
    </nav>
  );
}