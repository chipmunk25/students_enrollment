const { Router } = require('express');
const V1Router = require('./v1');

const APIRouter = Router();
APIRouter.use('/v1', V1Router);

module.exports = APIRouter;
