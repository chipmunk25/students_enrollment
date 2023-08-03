const { Router } = require('express');
const classmgt = require('../../../controllers/classmgt');
const validator = require("../../../middlewares/validations/classmgt")
// const studentValidator = require("../../../middlewares/validations/student")
const auth = require("../../../utils/tokenUtil")
const ManageClassRouter = Router();
ManageClassRouter.post('/register', auth.verifyToken, validator.checkClass, classmgt.createClass);
// ManageClassRouter.post('/assign-students', auth.verifyToken, studentValidator.checkStudentsInClass, classmgt.assignStudentsToClass);
ManageClassRouter.patch('/:id', auth.verifyToken, classmgt.UpdateClass);
module.exports = ManageClassRouter;
