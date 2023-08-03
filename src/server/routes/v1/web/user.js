const { Router } = require('express');
const user = require('../../../controllers/user');
const auth = require("../../../utils/tokenUtil")
const ManageUserRouter = Router();
// ManageUserRouter.post('/', user.createUser);
ManageUserRouter.post('/auth', user.loginUser);
// ManageUserRouter.post('/resend-confirmation', user.resendConfirmCode);
// ManageUserRouter.post('/verify-confirm', user.VerifyConfirmedUser);
// ManageUserRouter.post('/reset-password', user.ResetPassword);
ManageUserRouter.get('/logout', user.logout);
ManageUserRouter.get('/auth/:id', auth.verifyToken, user.getAuthUser);
module.exports = ManageUserRouter;
