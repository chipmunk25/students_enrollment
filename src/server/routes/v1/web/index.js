const { Router } = require('express');
const UserRouter = require('./user');
const StudentRouter = require('./students');
const CourseRouter = require('./course');
const ClassRouter = require('./classmgt');
const WebRouter = Router();
WebRouter.use('/users', UserRouter);
WebRouter.use('/students', StudentRouter);
WebRouter.use('/courses', CourseRouter);
WebRouter.use('/classes', ClassRouter);
module.exports = WebRouter;