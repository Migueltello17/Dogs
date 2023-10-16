const express = require('express');
const temperamentRouter = express.Router();
const getTemperamentsHandler = require('../Handler/temperamentsHandler')

temperamentRouter.get('/', getTemperamentsHandler);

module.exports = temperamentRouter;