const { Router } = require('express');
const course = require('../../../controllers/course');
const { validateRequestSchema } = require('../../../middlewares/schemas');
const CourseIdSchema = require('../../../middlewares/schemas/checkCourseId');
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
ManageCourseRouter.post('/course-registration', auth.verifyToken, course.registerStudentCourse);
ManageCourseRouter.get('/', auth.verifyToken, course.getCourses);
ManageCourseRouter.get('/:id', auth.verifyToken, [...IdSchema, validateRequestSchema], course.getSingleCourse);
ManageCourseRouter.get('/registered/:courseId', auth.verifyToken, [...CourseIdSchema, validateRequestSchema], course.getCourseRegisteredStudents);
ManageCourseRouter.patch('/:id', auth.verifyToken, validUpdate);
module.exports = ManageCourseRouter;
