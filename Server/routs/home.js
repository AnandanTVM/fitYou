// const { response } = require('express');
const express = require('express');
const homeControllers = require('../controllers/homeControllers');

const router = express.Router();

// sing up for Client
router.post('/api/clientRegister', homeControllers.clientSignup);
router.post('/api/trainerRegister', homeControllers.trainerSignup);
router.get('/api/viewAllPlan', homeControllers.viewAllPlan);

module.exports = router;
