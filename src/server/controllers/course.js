const prisma = require('../utils/prismaUtil');
const HttpException = require('../middlewares/http-exception');
const loggerUtil = require('../utils/loggerUtil');
exports.createCourse = async (req, res, next) => {
    const data = req.body
    try {
        const coursemgt = await prisma.coursemgt.create({
            data
        });
        res.status(201).json({
            status: 'success',
            coursemgt
        });
    } catch (error) {
        console.log('error:', error.message);
        loggerUtil.error(error.message);
        next(new HttpException(422, error.message));
    }
};
exports.assignStudentsToClass = async (req, res, next) => {
    const { classStudents } = req.body
    try {
        const student = await prisma.studentclass.createMany({
            data: classStudents
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
exports.UpdateCourse = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const classmgt = await prisma.coursemgt.update({
            where: {
                id
            },
            data
        });
        res.status(201).json({
            status: 'success',
            classmgt
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