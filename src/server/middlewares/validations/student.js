const prisma = require('../../utils/prismaUtil');
const HttpException = require('../http-exception');
const loggerUtil = require('../../utils/loggerUtil');
exports.checkStudentId = async (req, res, next) => {
    const { studentId } = req.body
    const studentExist = await prisma.students.findUnique({
        where: {
            studentId,
        }
    });
    if (studentExist) {
        loggerUtil.error('Student Already Exist');
        next(new HttpException(422, 'Student Already Exist'));
    } else {
        next();
    }
};
exports.checkStudentInClass = async (req, res, next) => {
    const { studentId } = req.body
    const studentExist = await prisma.studentclass.findFirst({
        where: {
            studentId
        }
    });
    if (studentExist) {
        loggerUtil.error('Student Already Has a Class');
        next(new HttpException(422, 'Student Already Has a Class'));
    } else {
        next();
    }
};
exports.checkStudentsInClass = async (req, res, next) => {
    const { studentIds } = req.body
    const studentsExist = await prisma.studentclass.findMany({
        where: {
            id: { in: studentIds },
        }
    });
    if (studentsExist) {
        loggerUtil.error('Students Already Have a Class');
        next(new HttpException(422, 'Students Already Have a Class'));
    } else {
        next();
    }
};