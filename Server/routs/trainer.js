// const { response } = require('express');
const express = require('express');
const trainerControllers = require('../controllers/trainerControllers');
const auth = require('../middlewares/tokenAuth');

const router = express.Router();

// sing up for Client
router.post('/api/trainerLogin', trainerControllers.trainerLogin);

// router.get('/api/getuserDetails/:id', auth.Trainerprotect);

router.post(
  '/api/uploadVideo',
  auth.Trainerprotect,
  trainerControllers.uploadVideo
);

module.exports = router;
