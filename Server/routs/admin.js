const express = require('express');
const adminControllers = require('../controllers/adminControllers');
const auth = require('../middlewares/tokenAuth');

const router = express.Router();

// sing up for Client
router.post('/api/adminLogin', adminControllers.adminLogin);
router.get('/api/userInfo', auth.adminprotect, adminControllers.userInfo);
router.get(
  '/api/activeTrainerInfo',
  auth.adminprotect,
  adminControllers.activeTrainerInfo
);
router.post(
  '/api/updateUserInfo',
  auth.adminprotect,
  adminControllers.updateUserInfo
);
router.get(
  '/api/trainerApprovel',
  auth.adminprotect,
  adminControllers.trainerApprovel
);
router.get(
  '/api/getTrainerDetails/:id',
  auth.adminprotect,
  adminControllers.getTrainerDetails
);
router.get(
  '/api/getuserDetails/:id',
  auth.adminprotect,
  adminControllers.getuserDetails
);

router.get(
  '/api/trainerReject/:id',
  auth.adminprotect,
  adminControllers.rejectTrainer
);
router.get(
  '/api/trainerApprovel/:id',
  auth.adminprotect,
  adminControllers.approvelTrainer
);
router.get(
  '/api/unBlockTrainer/:id',
  auth.adminprotect,
  adminControllers.unBlockTrainer
);
router.get(
  '/api/blockTrainer/:id',
  auth.adminprotect,
  adminControllers.blockTrainer
);
router.post('/api/uploadVideo', (req, res) => {
  console.log(req.files);
  console.log(req.body);
});
router.post('/api/addPlan', auth.adminprotect, adminControllers.addPlan);
router.get(
  '/api/unBlockuserinfo/:id',
  auth.adminprotect,
  adminControllers.unBlockUser
);
router.get(
  '/api/blockUserinfo/:id',
  auth.adminprotect,
  adminControllers.blockUser
);
module.exports = router;
