const { Router } = require('express');
const course = require('../../../controllers/course');
const validator = require("../../../middlewares/validations/course")
// const studentValidator = require("../../../middlewares/validations/student")
const auth = require("../../../utils/tokenUtil")
const ManageCourseRouter = Router();
ManageCourseRouter.post('/', auth.verifyToken, validator.checkCourse, course.createCourse);
ManageCourseRouter.get('/', auth.verifyToken, course.getCourses);
ManageCourseRouter.patch('/:id', auth.verifyToken, course.UpdateCourse);
module.exports = ManageCourseRouter;
