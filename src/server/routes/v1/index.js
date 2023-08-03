const { Router } = require('express');
const WebRouter = require('./web');

const V1Router = Router();
V1Router.use('/web', WebRouter);

module.exports = V1Router;
