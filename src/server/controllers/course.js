const prisma = require('../utils/prismaUtil');
const HttpException = require('../middlewares/http-exception');
const loggerUtil = require('../utils/loggerUtil');
exports.createCourse = async (req, res, next) => {
    const data = req.body
    try {
        const course = await prisma.coursemgt.create({
            data
        });
        res.status(201).json({
            status: 'success',
            course
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
        const course = await prisma.coursemgt.update({
            where: {
                id: parseInt(id)
            },
            data
        });
        res.status(201).json({
            status: 'success',
            course
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
exports.getCourses = async (req, res, next) => {
    try {
        const courses = await prisma.coursemgt.findMany({
        });
        res.status(200).json({
            status: 'success',
            courses
        });
    } catch (error) {
        console.log(error.message);
        loggerUtil.error(error.message);
        next(new HttpException(404, error.message));
    }
};