const prisma = require('../utils/prismaUtil');
const HttpException = require('../middlewares/http-exception');
const loggerUtil = require('../utils/loggerUtil');
exports.createClass = async (req, res, next) => {
    const data = req.body
    try {
        const classmgt = await prisma.classmgt.create({
            data
        });
        res.status(201).json({
            status: 'success',
            classmgt
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
exports.UpdateClass = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const classmgt = await prisma.classmgt.update({
            where: {
                id: parseInt(id)
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
exports.getClasses = async (req, res, next) => {
    try {
        const classes = await prisma.classmgt.findMany({
            select: {
                id: true,
                className: true,
                maxClassSize: true,
                student: {
                    select: {
                        name: true
                    }
                },
            }
        });
        res.status(200).json({
            status: 'success',
            classes
        });
    } catch (error) {
        console.log(error.message);
        loggerUtil.error(error.message);
        next(new HttpException(404, error.message));
    }
};