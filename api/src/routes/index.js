const { Router } = require('express');
const bodyParser = require('body-parser');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Country = require('./Country.js');
const Activity = require('./Tour_Activity.js');
const NameCountries = require('./NameCountries.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(bodyParser.json());

//Rutas de mi API
router.use('/Country', Country);
router.use('/TourActivity', Activity);
router.use('/AllCountries', NameCountries);

module.exports = router;