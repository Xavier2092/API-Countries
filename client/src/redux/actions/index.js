import axios from 'axios';
export const GET_COUNTRY = 'GET_COUNTRY';
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME';
export const GET_DETAILS = 'GET_DETAILS;'
export const ORDER_BY_COUNTRY = 'ORDER_BY_COUNTRY';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const FILTER_BY_POPULATION = 'FILTER_BY_POPULATION';
export const GET_ONLY_COUNTRIES = 'GET_ONLY_COUNTRIES';
export const GET_TOUR_ACTIVITY = 'GET_TOUR_ACTIVITY';
export const COUNTRY_BY_ACTIVITY = 'COUNTRY_BY_ACTIVITY';

export function getCountry(){
  return async function (dispatch){
    try{
        var jsonCountry = await axios.get('http://localhost:3001/api/Country');
          return dispatch({
            type: "GET_COUNTRY",
            payload: jsonCountry.data
          })
    } catch (error){
      console.log(error)
    }
  }
}

export function getCountryName(name){
  return async function (dispatch){
    try{
        var jsonName = await axios.get('http://localhost:3001/api/Country?name=' + name);
          return dispatch({
            type: "GET_COUNTRY_NAME",
            payload: jsonName.data
          })
    } catch (error){
      console.log(error);
      alert("Pais no existe");
    }
  }
}

export function getDetails(id){
  return async function(dispatch){
    try{
        var jsonDetail = await axios.get('http://localhost:3001/api/Country/' + id);
          return dispatch({
            type: GET_DETAILS,
            payload: jsonDetail.data
          })
    } catch (error){
      console.log(error)
    }
  }
}

export function orderByCountry(payload){
  return {
    type: "ORDER_BY_COUNTRY",
    payload
  }
}

export function filterCountryByContinent(payload){
  return {
    type: "FILTER_BY_CONTINENT",
    payload
  }
}

export function filterCountryByPopulation(payload){
  return {
    type: "FILTER_BY_POPULATION",
    payload
  }
}

export function getOnlyCountries(){
  return async function(dispatch){
    try{
      var jsonOnlyCountry = await axios.get('http://localhost:3001/api/AllCountries');
        return dispatch({
            type: "GET_ONLY_COUNTRIES",
            payload: jsonOnlyCountry.data
        })
    } catch (error){
      console.log(error)
    }
  }
}

export function postTourActivity(payload){
  console.log("ActionPay " + payload);
  return async function (dispatch){
    const actTour = await axios.post('http://localhost:3001/api/TourActivity', payload);
    return actTour;
  }
}

export function getTourActivity(){
  return async function(dispatch){
    try{
      const jsonActTour = await axios.get('http://localhost:3001/api/TourActivity');
        return dispatch({
          type: "GET_TOUR_ACTIVITY",
          payload: jsonActTour.data
        })

    } catch (error){
      console.log(error)
    }
  }
}

export function countryByActivity(payload) {
  console.log("pay " + payload);
  return {
      type: "COUNTRY_BY_ACTIVITY",
      payload
  }
};