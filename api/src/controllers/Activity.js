//metodos get y post de activity
const { Country, Tourist_activity } = require('../db');
const { Router } = require('express');
const router = Router();

//GET
const getActivity = async (req, res, next)=> {
    try{
        const tourActivity = await Tourist_activity.findAll({
            include: Country// no necesario incluir country porque ya esta incluido en el modelo
        });
        if( tourActivity.length === 0 ){//si no hay ninguna actividad retornarme un not found
            res.send('No hay actividades');
        }else{//Si hay actividades retornarlas todas
            res.status(200).send(tourActivity);
        }
    } catch(error){
        next(error);
    };
};

//POST
const postActivity = async (req, res, next)=> {//guardado actividades
    const { nameActivity, difficulty, span, season, country } = req.body;
    try {
        const activity = await Tourist_activity.create({
            nameActivity,
            difficulty,
            span,
            season,
        })

            let countries = await Country.findAll({ //buscar el pais que coincida con el nombre
                where: {
                    nameCountry: country
                }
            });
    
            await activity.addCountry(countries); //agregarle el país a la actividad
        return res.json({message: "Activity succesfully added"})
        
    } catch (error) {
        next(error);
    }
};

module.exports = {
    router,
    getActivity,
    postActivity
};