const Router = require('express');
const dogRouter = Router();
const { getDogsHandler, getDogByIdHandler, createNewDogHandler} = require('../Handler/dogsHandler');


dogRouter.get('/', getDogsHandler);
dogRouter.post('/', createNewDogHandler);
dogRouter.get('/:idRaza', getDogByIdHandler);


module.exports = dogRouter;
