// const { response } = require('express');
const express = require('express');
const trainerControllers = require('../controllers/trainerControllers');

const router = express.Router();

// sing up for Client
router.post('/api/trainerLogin', trainerControllers.trainerLogin);

module.exports = router;
