const axios = require('axios');
const { Country } = require('../db');



const loadDB = async ()=> {
  try{
    const validate = await Country.findOne({
      where: {nameCountry: 'Venezuela'}
    });
    
    const apiGet = await axios.get('https://restcountries.com/v3.1/all');
    const apiInfo = await apiGet.data.map(c => {
      return {
        id: c.cca3,
        nameCountry: c.name.common,
        flag: c.flags.png,
        continent: c.region,
        capital: c.capital || ['No tiene capital'],
        subregion: c.subregion,
        area: c.area,
        population: c.population,
        coatOfArms: c.coatOfArms.png
      }
    })

    if(!validate){
      await apiInfo.map(async co => {
        Country.create({
          id: co.id,
          nameCountry: co.nameCountry,
          flag: co.flag,
          continent: co.continent,
          capital: co.capital,
          subregion: co.subregion,
          area: co.area,
          population: co.population,
          coatOfArms: co.coatOfArms
        })
      })
      console.log('Paises guardados')
    } 

  } catch(error){
    console.log(error);
  }
}

module.exports = loadDB;