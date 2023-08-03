const prisma = require('../../utils/prismaUtil');
const HttpException = require('../http-exception');
const loggerUtil = require('../../utils/loggerUtil');
exports.checkCourse = async (req, res, next) => {
    const { courseName } = req.body
    const classExist = await prisma.students.findFirst({
        where: {
            OR: [
                {
                    courseName,
                }
            ]
        }
    });
    if (classExist) {
        loggerUtil.error('Course Already Exist');
        next(new HttpException(422, 'Course Already Exist'));
    } else {
        next();
    }
};