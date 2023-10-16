const express = require('express');
const dogRouter = express.Router();
const { getDogsHandler, getDogByIdHandler, createNewDogHandler} = require('../Handler/dogsHandler');


dogRouter.get('/', getDogsHandler);
dogRouter.post('/', createNewDogHandler);
dogRouter.get('/:id', getDogByIdHandler);


module.exports = dogRouter;
