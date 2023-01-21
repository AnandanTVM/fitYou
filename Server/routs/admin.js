const express = require('express');
const adminControllers = require('../controllers/adminControllers');
const auth = require('../middlewares/tokenAuth');

const router = express.Router();

// sing up for Client

router.post('/adminLogin', adminControllers.adminLogin);

router.get('/userInfo', auth.adminprotect, adminControllers.userInfo);

router.get(
  '/activeTrainerInfo',
  auth.adminprotect,
  adminControllers.activeTrainerInfo
);

router.post(
  '/updateUserInfo',
  auth.adminprotect,
  adminControllers.updateUserInfo
);

router.get(
  '/trainerApprovel',
  auth.adminprotect,
  adminControllers.trainerApprovel
);

router.get(
  '/getTrainerDetails/:id',
  auth.adminprotect,
  adminControllers.getTrainerDetails
);

router.get(
  '/getuserDetails/:id',
  auth.adminprotect,
  adminControllers.getuserDetails
);

router.get(
  '/trainerReject/:id',
  auth.adminprotect,
  adminControllers.rejectTrainer
);

router.get(
  '/trainerApprovel/:id',
  auth.adminprotect,
  adminControllers.approvelTrainer
);

router.get(
  '/unBlockTrainer/:id',
  auth.adminprotect,
  adminControllers.unBlockTrainer
);

router.get(
  '/blockTrainer/:id',
  auth.adminprotect,
  adminControllers.blockTrainer
);

router.post('/addPlan', auth.adminprotect, adminControllers.addPlan);
router.get(
  '/unBlockuserinfo/:id',
  auth.adminprotect,
  adminControllers.unBlockUser
);

router.get(
  '/blockUserinfo/:id',
  auth.adminprotect,
  adminControllers.blockUser
);

router.get('/getallPlans', auth.adminprotect, adminControllers.getallPlans);

router.post(
  '/uploadVideo',
  auth.adminprotect,
  adminControllers.uploadVideo
);
router.get(
  '/removePackage/:id',
  auth.adminprotect,
  adminControllers.removePackage
);
module.exports = router;
