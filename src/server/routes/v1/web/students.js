const { Router } = require('express');
const student = require('../../../controllers/students');
const validator = require("../../../middlewares/validations/student")
const auth = require("../../../utils/tokenUtil")
const upload = require('../../../utils/multerUtil');
const ManageStudentRouter = Router();
ManageStudentRouter.post('/register', auth.verifyToken, upload.single('photograph'), validator.checkStudentId, student.registerStudent);
ManageStudentRouter.post('/assign-class', auth.verifyToken, validator.checkStudentInClass, student.assignStudentClass);
ManageStudentRouter.patch('/:studentId', auth.verifyToken, upload.single('photograph'), student.UpdateStudent);
ManageStudentRouter.get('/', auth.verifyToken, student.getStudents);
module.exports = ManageStudentRouter;
