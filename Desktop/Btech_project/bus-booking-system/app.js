const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
const busRoutes = require('./routes/bus');

app.use('/api/auth', authRoutes);
app.use('/api/buses', busRoutes);

module.exports = app;