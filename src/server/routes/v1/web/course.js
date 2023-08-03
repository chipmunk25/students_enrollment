const { Router } = require('express');
const course = require('../../../controllers/course');
const validator = require("../../../middlewares/validations/course")
// const studentValidator = require("../../../middlewares/validations/student")
const auth = require("../../../utils/tokenUtil")
const ManageCourseRouter = Router();
ManageCourseRouter.post('/register', auth.verifyToken, validator.checkCourse, course.createCourse);
// ManageCourseRouter.post('/assign-students', auth.verifyToken, studentValidator.checkStudentsInClass, course.assignStudentsToClass);
ManageCourseRouter.patch('/:id', auth.verifyToken, course.UpdateCourse);
module.exports = ManageCourseRouter;
