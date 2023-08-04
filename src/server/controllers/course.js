const prisma = require('../utils/prismaUtil');
const HttpException = require('../middlewares/http-exception');
const loggerUtil = require('../utils/loggerUtil');
exports.createCourse = async (req, res, next) => {
    const data = req.body
    try {
        const parsedDate = new Date(data.startDate);
        // Convert the Date object to ISO-8601 DateTime format
        data.startDate = parsedDate.toISOString()
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
exports.registerStudentCourse = async (req, res, next) => {
    const { studentIds } = req.body
    try {
        const students = await prisma.registeredstudents.createMany({
            data: studentIds
        });
        res.status(201).json({
            status: 'success',
            students
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
        const parsedDate = new Date(data.startDate);
        // Convert the Date object to ISO-8601 DateTime format
        data.startDate = parsedDate.toISOString()
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
exports.getCourseRegisteredStudents = async (req, res, next) => {
    const { courseId } = req.params
    try {
        const students = await prisma.registeredstudents.findMany({
            where: {
                courseId: parseInt(courseId)
            },
            include: {
                student: true
            }
        })
        res.status(200).json({
            status: 'success',
            students
        });
    } catch (error) {
        console.log(error.message);
        loggerUtil.error(error.message);
        next(new HttpException(404, error.message));
    }
}
exports.getCourses = async (req, res, next) => {
    try {
        const courses = await prisma.coursemgt.findMany({
            include: {
                registeredstudents: {
                    select: {
                        id: true,
                        student: {
                            select: {
                                studentId: true,
                                name: true,
                            }
                        },
                    }
                },
            }
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
exports.getSingleCourse = async (req, res, next) => {
    const { id } = req.params
    try {
        const course = await prisma.coursemgt.findUnique({
            where: { id: parseInt(id) }
        });
        res.status(200).json({
            status: 'success',
            course
        });
    } catch (error) {
        console.log(error.message);
        loggerUtil.error(error.message);
        next(new HttpException(404, error.message));
    }
};