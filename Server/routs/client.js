const express = require('express');
const clientControllers = require('../controllers/clientControllers');
const auth = require('../middlewares/tokenAuth');

const router = express.Router();

// sing up for Client
router.post('/api/clientLogin', clientControllers.clientLogin);
router.post('/api/ClientSendOtp', clientControllers.clientSendOtp);
router.post('/api/clientVerifyOtp', clientControllers.verifiyOtp);
router.post(
  '/api/placeOdder',
  auth.Clientprotect,
  clientControllers.placeOdder
);
router.post(
  '/api/verifiyPayment',
  auth.Clientprotect,
  clientControllers.verifiyPayment
);
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
router.get(
  '/api/getClientPlan/:id',
  auth.Clientprotect,
  clientControllers.getClientPlan
);
router.get('/api/getVideo/:id', auth.Clientprotect, clientControllers.getVideo);
module.exports = router;
