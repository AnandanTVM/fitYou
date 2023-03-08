const express = require('express');
const clientControllers = require('../controllers/clientControllers');
const auth = require('../middlewares/tokenAuth');

const router = express.Router();

// sing up for Client
router.post('/clientLogin', clientControllers.clientLogin);
router.post('/ClientSendOtp', clientControllers.clientSendOtp);
router.post('/clientVerifyOtp', clientControllers.verifiyOtp);
router.post('/placeOdder', auth.Clientprotect, clientControllers.placeOdder);
router.post(
  '/verifiyPayment',
  auth.Clientprotect,
  clientControllers.verifiyPayment
);
router.get(
  '/getuserDetails/:id',
  auth.Clientprotect,
  clientControllers.ClientDetails
);
router.get(
  '/grtPlanDetails/:id',
  auth.Clientprotect,
  clientControllers.planDetails
);
router.get(
  '/getAllTrainerDetails',
  auth.Clientprotect,
  clientControllers.allTrainerDetails
);
router.get('/freeVideos', auth.Clientprotect, clientControllers.freeVideo);
router.get(
  '/getClientPlan/:id',
  auth.Clientprotect,
  clientControllers.getClientPlan
);
router.get('/getVideo/:id', auth.Clientprotect, clientControllers.getVideo);
router.get(
  '/gettrainerDetails',
  auth.Clientprotect,
  clientControllers.gettrainerDetails
);
router.get(
  '/getMessage/:tId',
  auth.Clientprotect,
  clientControllers.getMessage
);
router.post(
  '/sendMessage/:tId',
  auth.Clientprotect,
  clientControllers.sendMessage
);
router.put(
  '/slotBook/:tId',
  auth.Clientprotect,
  clientControllers.slotBookControl
);

module.exports = router;
