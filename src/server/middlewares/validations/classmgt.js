const prisma = require('../../utils/prismaUtil');
const HttpException = require('../http-exception');
const loggerUtil = require('../../utils/loggerUtil');
exports.checkClass = async (req, res, next) => {
    const { className } = req.body
    const classExist = await prisma.students.findFirst({
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