const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogRouter = require('./dog');
const temperamentRouter = require('./temperaments');

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRouter.use('/dogs', dogRouter);
mainRouter.use('/temperaments', temperamentRouter);

module.exports = mainRouter;
