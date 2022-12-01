const { response } = require('express');
let express = require('express');
let router = express.Router();

//sing up for Client
router.post('/api/clientRegister', async (req, res) => {
    console.log(req.body)


})
router.post('/api/TrainerRegister', async (req, res) => {
    console.log(req.body)


})






module.exports = router;