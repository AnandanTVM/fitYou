const { response } = require('express');
let express = require('express');
let { clientSignup } = require('../controllers/homeControllers');

let router = express.Router();


//sing up for Client
router.post('/api/clientRegister',clientSignup)
router.post('/api/TrainerRegister', async (req, res) => {
    console.log(req.body)


})






module.exports = router;