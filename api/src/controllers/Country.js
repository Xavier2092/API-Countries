//metodos get y post de country
'use strict';

const { Country, Tourist_activity } = require('../db');
const axios = require('axios');
const { Op, Sequelize } = require('sequelize');

//GET Countries configuracion de  la ruta de la API
const getCountry = async (req, res, next)=> {
    let { name } = req.query;
    try {
        if(name){ //busqueda por letras del nombre coincidentes %abc% incluyendo la actividad que contenga ese país
            let countries = await Country.findAll({
                include: {
                    model: Tourist_activity
                },
                where: {
                    nameCountry: {[ Sequelize.Op.iLike ]: `%${name}%`}
                }
            });
            res.json(countries);
        }else{ //Lista de países incluyendo sus actividades
            let countries = await Country.findAll({
                include: {
                    model: Tourist_activity
                }
            });
            res.json(countries);
        }
    } catch (error) {
        next(error);
    }
};

const getCountryByID = async (req, res, next)=> {//Busqueda de paises por ID
    const { id } = req.params;
    try{
        const countryID = await Country.findByPk(id.toUpperCase(), {
            include: {
                model: Tourist_activity
            }
        });
        
        res.json(countryID || 'ID not found!');
    } catch(error){
        next(error);
    };
};

module.exports = {
    getCountry,
    getCountryByID
};