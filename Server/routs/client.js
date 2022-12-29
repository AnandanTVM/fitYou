const express = require('express');
const clientControllers = require('../controllers/clientControllers');
const auth = require('../middlewares/tokenAuth');

const router = express.Router();

// sing up for Client
router.post('/api/clientLogin', clientControllers.clientLogin);
router.post('/api/ClientSendOtp', clientControllers.clientSendOtp);
router.post('/api/clientVerifyOtp', clientControllers.verifiyOtp);
router.get(
  '/api/getuserDetails/:id',
  auth.Clientprotect,
  clientControllers.ClientDetails
);
router.get(
  '/api/grtPlanDetails/:id',
  auth.Clientprotect,
  clientControllers.planDetails
);
router.get(
  '/api/getAllTrainerDetails',
  auth.Clientprotect,
  clientControllers.allTrainerDetails
);
router.get('/api/freeVideos', auth.Clientprotect, clientControllers.freeVideo);
module.exports = router;
