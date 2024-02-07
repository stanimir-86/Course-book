const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../config');

exports.authMiddleware = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {
        const decodetToken = await jwt.verify(token, SECRET);

        req.user = decodetToken;
        res.locals.isAuthenticated = true;
        res.locals.user = decodetToken;
        next();
    } catch (err) {
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }
};