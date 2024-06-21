const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.User;

exports.login = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user || !(await user.validPassword(password))) {
            return res.status(401).send({ error: 'Invalid email or password.' });
        }

        const token = jwt.sign({ id: user.user_id }, 'secret_key', { expiresIn: '1h' });

        res.send({ token });
    } catch (error) {
        res.status(500).send({ error: 'Internal server error.' });
    }
};