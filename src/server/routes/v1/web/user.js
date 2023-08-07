const { Router } = require('express');
const user = require('../../../controllers/user');
const userSchema = require('../../../middlewares/schemas/user');
const auth = require("../../../utils/tokenUtil")
const { validateRequestSchema } = require('../../../middlewares/schemas');

const ManageUserRouter = Router();
const valid = [
    ...userSchema,
    validateRequestSchema,
    user.loginUser
]
ManageUserRouter.post('/auth', valid);
ManageUserRouter.get('/logout', user.logout);
ManageUserRouter.get('/auth/:id', auth.verifyToken, user.getAuthUser);
module.exports = ManageUserRouter;
