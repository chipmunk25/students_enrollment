const { Router } = require('express');
const student = require('../../../controllers/students');
const validator = require("../../../middlewares/validations/student")
const auth = require("../../../utils/tokenUtil")
const ManageStudentRouter = Router();
ManageStudentRouter.post('/register', auth.verifyToken, validator.checkStudentId, student.registerStudent);
ManageStudentRouter.post('/assign-class', auth.verifyToken, validator.checkStudentInClass, student.assignStudentClass);
ManageStudentRouter.patch('/:id', auth.verifyToken, student.UpdateStudent);
module.exports = ManageStudentRouter;
