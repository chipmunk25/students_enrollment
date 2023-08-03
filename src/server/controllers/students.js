const prisma = require('../utils/prismaUtil');
const HttpException = require('../middlewares/http-exception');
const loggerUtil = require('../utils/loggerUtil');
exports.registerStudent = async (req, res, next) => {
    const { classId, ...data } = req.body
    try {
        const student = await prisma.students.create({
            data
        });
        if (classId) {
            const studclass = {
                studentId: student.studentId,
                classId
            }
            await prisma.studentclass.create({
                data: studclass
            });
        }
        res.status(201).json({
            status: 'success',
            student
        });
    } catch (error) {
        console.log('error:', error.message);
        loggerUtil.error(error.message);
        next(new HttpException(422, error.message));
    }
};
exports.assignStudentClass = async (req, res, next) => {
    const data = req.body
    try {
        const student = await prisma.studentclass.create({
            data
        });
        res.status(201).json({
            status: 'success',
            student
        });
    } catch (error) {
        console.log('error:', error.message);
        loggerUtil.error(error.message);
        next(new HttpException(422, error.message));
    }
};
exports.UpdateStudent = async (req, res, next) => {
    const { studentId } = req.params;
    const data = req.body;
    try {
        const student = await prisma.students.update({
            where: {
                studentId
            },
            data
        });
        res.status(201).json({
            status: 'success',
            student
        });
    } catch (error) {
        console.log(error.message);
        loggerUtil.error(error.message);
        next(new HttpException(422, error.message));
    }
};
exports.changeStudentClass = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const student = await prisma.studentclass.update({
            where: {
                id
            },
            data
        });
        res.status(201).json({
            status: 'success',
            student
        });
    } catch (error) {
        console.log(error.message);
        loggerUtil.error(error.message);
        next(new HttpException(422, error.message));
    }
};