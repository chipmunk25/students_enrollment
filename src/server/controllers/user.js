const prisma = require('../utils/prismaUtil');
const passwordUtil = require('../utils/passwordUtil');
const HttpException = require('../middlewares/http-exception');
const loggerUtil = require('../utils/loggerUtil');
const tokenUtil = require('../utils/tokenUtil');
const validateEmail = async email => {
    console.log(email)
    try {
        const emailVal = await prisma.users.findUnique({
            where: {
                email
            }
        });
        if (emailVal === null || emailVal === 'null') {
            throw new HttpException(422, 'User not Active');
        }
        return emailVal;
    } catch (error) {
        throw new HttpException(422, error.message);
    }
};
const validateConfirmed = async email => {
    try {
        const validatedEmail = await prisma.users.findFirst({
            where: {
                OR: [
                    {
                        email,
                        confirmed: true
                    }
                ]
            }
        });
        if (validatedEmail === null || validatedEmail === 'null') {
            throw new HttpException(422, 'User not Confirmed Contact your Admin');
        }
        return validatedEmail;
    } catch (error) {
        throw new HttpException(422, error.message);
    }
};
const validatePwd = async (userpwd, syspwd) => {
    try {
        const validPwd = await passwordUtil.comparePassword(userpwd, syspwd);
        if (validPwd === false || validPwd === 'false') {
            throw new HttpException(422, 'Check the password, something wrong');
        } else {
            return validPwd;
        }
    } catch (error) {
        console.log(error.message);
        throw new HttpException(422, error.message);
    }
};
exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const emailValidated = await validateEmail(email);
        const user = await validateConfirmed(emailValidated?.email);
        const valid = await validatePwd(password, user?.password || '');
        if (valid === true || valid === 'true') {
            const token = tokenUtil.signToken(user);
            res.header('Authorization', token)
            res.status(200).json({
                status: "success",
                token,
            });
        }
    } catch (error) {
        // console.log(error.message);
        loggerUtil.error(error.message);
        next(error);
        // next(new HttpException(422, error.message));
    }
};