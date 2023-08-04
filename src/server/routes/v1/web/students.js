const { Router } = require('express');
const student = require('../../../controllers/students');
const validator = require("../../../middlewares/validations/student")
const auth = require("../../../utils/tokenUtil")
const upload = require('../../../utils/multerUtil');
const studentSchema = require('../../../middlewares/schemas/student');
const { validateRequestSchema } = require('../../../middlewares/schemas');
const StudentIdSchema = require('../../../middlewares/schemas/checkStudentId');
const updateStudentSchema = require('../../../middlewares/schemas/updateStudent');
const ManageStudentRouter = Router();
const validSave = [
    ...studentSchema,
    validateRequestSchema,
    validator.checkStudentId, student.registerStudent
]
const validUpdate = [
    ...StudentIdSchema,
    ...updateStudentSchema,
    validateRequestSchema,
    student.UpdateStudent
]
ManageStudentRouter.post('/register', auth.verifyToken, upload.single('photograph'), validSave);
ManageStudentRouter.post('/assign-class', auth.verifyToken, validator.checkStudentInClass, student.assignStudentClass);
ManageStudentRouter.patch('/:studentId', auth.verifyToken, upload.single('photograph'), validUpdate);
ManageStudentRouter.get('/', auth.verifyToken, student.getStudents);
module.exports = ManageStudentRouter;
