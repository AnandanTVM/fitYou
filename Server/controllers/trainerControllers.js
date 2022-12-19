const { response } = require('express');
const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const trainerHelpers = require('../helpers/trainerHelpers');

const trainerLogin = AsyncHandler(async (req, res) => {
  trainerHelpers
    .trainerdoLogin(req.body)
    .then((response) => {
      if (response.status) {
        console.log('response', response);
        const token = jwt.sign(
          {
            trainerId: response.trainer._id,
            name: response.trainer.fname + response.trainer.lname,
          },
          'fityou5055'
        );
        console.log(token);
        return res.json({ status: 'ok', token: token });
      }
      return res.json({ status: 'error', user: false });
    })
    .catch((err) => res.json({ status: 'error', user: false }));
});

// exports
module.exports = {
  trainerLogin,
};
