const prisma = require('../../utils/prismaUtil');
const HttpException = require('../http-exception');
const loggerUtil = require('../../utils/loggerUtil');
exports.checkCourse = async (req, res, next) => {
    const { courseName } = req.body
    const courseExist = await prisma.coursemgt.findFirst({
        where: {
            OR: [
                {
                    courseName,
                }
            ]
        }
    });
    if (courseExist) {
        loggerUtil.error('Course Already Exist');
        next(new HttpException(422, 'Course Already Exist'));
    } else {
        next();
    }
};
exports.checkstudentsInCourse = async (req, res, next) => {
    const { studentIds } = req.body
    const courseExist = await prisma.registeredstudents.findMany({
        where: {
            studentId: { in: studentIds?.map(item => item.studentId) },
            courseId: studentIds[0]?.courseId
        }
    });
    if (courseExist.length > 0) {
        let message = '';
        courseExist.map((error) => {
            console.log(error)
            message += error.studentId + ', ';
        });
        loggerUtil.error(`Students with ID (${message}) ${courseExist.length > 1 ? "have" : "has"} Already Registered this Course`);
        next(new HttpException(422, `Students with ID (${message}) ${courseExist.length > 1 ? "have" : "has"} Already Registered this Course`));
    } else {
        next();
    }
};