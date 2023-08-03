const jwt = require("jsonwebtoken");
//Sign the jwt token
exports.signToken = ({ id }) => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};
exports.setInvalidToken = (loggedout) => {
    return jwt.sign({ loggedout }, process.env.JWT_SECRET, {
        expiresIn: 60
    });
};
exports.CheckToken = (req, res, next) => {
    const bearerHeader = req.headers['auth-token'];
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1];
        req.token = bearerToken
        next()
    } else {
        //Forbidden
        res.status(401).json({
            status: "fail",
            message: "User not Authenicated"
        });
    }
}
exports.verifyToken = (req, res, next) => {
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                status: "fail",
                message: "Access Denied",
                token
            });
        }
        try {
            const verified = jwt.verify(token, process.env.JWT_SECRET)
            req.user = verified;
            next();
        } catch (error) {
            res.status(403).json({
                status: "fail",
                message: "Invalid Token",
                token
            });
        }
    } else {
        return res.status(500).json({
            status: "fail",
            message: "No Header Available"
        });
    }
}