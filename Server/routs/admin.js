const express = require('express');
const adminControllers = require('../controllers/adminControllers');
const auth = require('../middlewares/tokenAuth');

const router = express.Router();

// sing up for Client
router.post('/api/adminLogin', adminControllers.adminLogin);
router.get('/api/userInfo', auth.adminprotect, adminControllers.userInfo);
router.post(
  '/api/updateUserInfo',
  auth.adminprotect,
  adminControllers.updateUserInfo
);
router.get('/api/trainerApprovel', auth.adminprotect, adminControllers.trainerApprovel);
module.exports = router;
