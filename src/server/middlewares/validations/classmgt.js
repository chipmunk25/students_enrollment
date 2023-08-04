const prisma = require('../../utils/prismaUtil');
const HttpException = require('../http-exception');
const loggerUtil = require('../../utils/loggerUtil');
exports.checkClass = async (req, res, next) => {
    const { className } = req.body
    const classExist = await prisma.classmgt.findFirst({
        where: {
            OR: [
                {
                    className,
                }
            ]
        }
    });
    if (classExist) {
        loggerUtil.error('Class Already Exist');
        next(new HttpException(422, 'Class Already Exist'));
    } else {
        next();
    }
};
exports.checkClassRep = async (req, res, next) => {
    const { classRepresentative } = req.body
    const classExist = await prisma.classmgt.findFirst({
        where: {
            OR: [
                {
                    classRepresentative,
                }
            ]
        }
    });
    if (classExist) {
        loggerUtil.error('Student is Already a Rep');
        next(new HttpException(422, 'Student is Already a Rep'));
    } else {
        next();
    }
};