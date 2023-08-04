const { Router } = require('express');
const course = require('../../../controllers/course');
const { validateRequestSchema } = require('../../../middlewares/schemas');
const IdSchema = require('../../../middlewares/schemas/checkId');
const courseSchema = require('../../../middlewares/schemas/course');
const validator = require("../../../middlewares/validations/course")
const auth = require("../../../utils/tokenUtil")
const ManageCourseRouter = Router();
const validSave = [
    ...courseSchema,
    validateRequestSchema,
    validator.checkCourse,
    course.createCourse
]
const validUpdate = [
    ...courseSchema,
    ...IdSchema,
    validateRequestSchema,
    course.UpdateCourse
]
ManageCourseRouter.post('/', auth.verifyToken, validSave);
ManageCourseRouter.get('/', auth.verifyToken, course.getCourses);
ManageCourseRouter.patch('/:id', auth.verifyToken, validUpdate);
module.exports = ManageCourseRouter;
