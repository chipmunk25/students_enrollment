const prisma = require('./prismaUtil');
const loggerUtil = require('./loggerUtil');
const passwordUtil = require('./passwordUtil');
const data = {
    fullname: 'super user',
    email: 'super@super.com',
    telephone: '0248111128',
    password: 'Pass123$1'
};
exports.run = async () => {
    try {
        const users = await prisma.users.findMany();
        if (users.length < 1) {
            const password = await passwordUtil.hashPassword(data.password);
            data.password = password;
            data.administrator = true;
            data.confirmed = true;
            await prisma.users.create({
                data
            });
            console.log('Admin user created');
        }
    } catch (error) {
        loggerUtil.error(error.message);
    }
};
