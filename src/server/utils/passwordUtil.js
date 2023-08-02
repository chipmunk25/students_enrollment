const bcrypt = require('bcrypt');

exports.hashPassword = plainText => {
    return new Promise(async (resolve, reject) => {
        const salt = await bcrypt.genSalt(10);
        await bcrypt.hash(plainText, salt, (err, hashed) => {
            if (err) {
                return reject(err);
            }
            resolve(hashed);
        });
    });
};
exports.comparePassword = (plainText, hashedPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainText, hashedPassword, (err, isSame) => {
            if (err) {
                return reject(err);
            }
            resolve(isSame);
        });
    });
};
