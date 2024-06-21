const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, busController.createBus);
router.get('/', authMiddleware, busController.getBuses);

module.exports = router;