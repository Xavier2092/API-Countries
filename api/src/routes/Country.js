// Importar todos los routers;


const { Router } = require('express');
const router = Router();
const { getCountry, getCountryByID } = require('../controllers/Country');

router.get('/', getCountry);//llamado de todos los paises
router.get('/:id', getCountryByID); //llamado de un pais por id
/* 
router.post('/', (req, res, next)=> {
  res.send('Soy el post de /Country')
})

router.put('/', (req, res, next)=> {
  res.send('Soy el put de /Country')
})

router.delete('/', (req, res, next)=> {
  res.send('Soy el delete de /Country')
})
*/

module.exports = router;