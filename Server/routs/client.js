const express = require('express');
const clientControllers = require('../controllers/clientControllers');
const auth = require('../middlewares/tokenAuth');

const router = express.Router();

// sing up for Client
router.post('/api/clientLogin', clientControllers.clientLogin);
router.get(
  '/api/getuserDetails/:id',
  auth.Clientprotect,
  clientControllers.ClientDetails
);

module.exports = router;
