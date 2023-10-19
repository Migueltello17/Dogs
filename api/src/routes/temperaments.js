const { Router } = require('express');
const temperamentRouter = Router();
const getTemperamentsHandler = require('../Handler/temperamentsHandler')

temperamentRouter.get("/", getTemperamentsHandler)


module.exports = temperamentRouter;