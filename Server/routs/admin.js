const express = require('express');
const adminControllers = require('../controllers/adminControllers');

const router = express.Router();

// sing up for Client
router.post('/api/adminLogin', adminControllers.adminLogin);

module.exports = router;
