// const { response } = require('express');
const express = require('express');
const trainerControllers = require('../controllers/trainerControllers');
const auth = require('../middlewares/tokenAuth');

const router = express.Router();

// sing up for Client
router.post('/trainerLogin', trainerControllers.trainerLogin);
router.post('/trainerSendOtp', trainerControllers.SendOtp);
router.post('/trainerVerifyOtp', trainerControllers.verifiyOtp);

router.get('/profile', auth.Trainerprotect, trainerControllers.profile);

router.post(
  '/uploadVideo',
  auth.Trainerprotect,
  trainerControllers.uploadVideo
);
router.post(
  '/trainerDetailsUpdate',
  auth.Trainerprotect,
  trainerControllers.trainerDetailsUpdate
);
router.get(
  '/getAllAllotedClientDetails',
  auth.Trainerprotect,
  trainerControllers.allotedClientDetails
);
router.get(
  '/getClientDetails/:id',
  auth.Trainerprotect,
  trainerControllers.getClientDetails
);
router.get(
  '/getMessage/:ClId',
  auth.Trainerprotect,
  trainerControllers.getMessage
);
router.post(
  '/sendMessage/:CId',
  auth.Trainerprotect,
  trainerControllers.sendMessage
);


module.exports = router;
