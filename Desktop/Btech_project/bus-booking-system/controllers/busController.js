const db = require('../models');
const Bus = db.Bus;

exports.createBus = async(req, res) => {
    const { company_id, bus_number, capacity, bus_type } = req.body;

    try {
        const bus = await Bus.create({ company_id, bus_number, capacity, bus_type });
        res.send(bus);
    } catch (error) {
        res.status(500).send({ error: 'Internal server error.' });
    }
};

exports.getBuses = async(req, res) => {
    try {
        const buses = await Bus.findAll();
        res.send(buses);
    } catch (error) {
        res.status(500).send({ error: 'Internal server error.' });
    }
};