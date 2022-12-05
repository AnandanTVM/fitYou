const express = require('express');
const clientControllers = require('../controllers/clientControllers');

const router = express.Router();

// sing up for Client
router.post('/api/clientLogin', clientControllers.clientLogin);

module.exports = router;
