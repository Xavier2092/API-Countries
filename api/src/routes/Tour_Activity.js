// Importar todos los routers;

//llamado de los metods de los controllers ver pi-main4
const { Router } = require('express');
// const { Country, Activity } = require('../db');
const router = Router();
const { getActivity, postActivity } = require('../controllers/Activity');

router.get('/', getActivity);//get de todas las actividades
router.post('/', postActivity);//post de actividades

/* router.put('/', (req, res, next)=> {
  res.send('Soy el put de /TourActivity')
})

router.delete('/', (req, res, next)=> {
  res.send('Soy el delete de /TourActivity')
})
*/

module.exports = router;