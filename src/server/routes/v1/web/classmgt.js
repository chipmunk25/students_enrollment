const { Router } = require('express');
const classmgt = require('../../../controllers/classmgt');
const { validateRequestSchema } = require('../../../middlewares/schemas');
const IdSchema = require('../../../middlewares/schemas/checkId');
const classSchema = require('../../../middlewares/schemas/classes');
const validator = require("../../../middlewares/validations/classmgt")
const auth = require("../../../utils/tokenUtil")
const validSave = [
    ...classSchema,
    validateRequestSchema,
    validator.checkClass,
    classmgt.createClass
]
const validUpdate = [
    ...classSchema,
    ...IdSchema,
    validateRequestSchema,
    classmgt.UpdateClass
]
const ManageClassRouter = Router();
ManageClassRouter.post('/', auth.verifyToken, validSave);
// ManageClassRouter.post('/assign-students', auth.verifyToken, studentValidator.checkStudentsInClass, classmgt.assignStudentsToClass);
ManageClassRouter.patch('/:id', auth.verifyToken, validUpdate);
ManageClassRouter.get('/', auth.verifyToken, classmgt.getClasses);
module.exports = ManageClassRouter;
