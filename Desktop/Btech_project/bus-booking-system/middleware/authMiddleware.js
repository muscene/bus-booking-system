const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).send({ error: 'No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, 'secret_key');
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).send({ error: 'Invalid token.' });
    }
};