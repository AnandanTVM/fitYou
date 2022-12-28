const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const clientHelpers = require('../helpers/clientHelpers');
const CommenHelpers = require('../helpers/CommenHelpers');

const clientLogin = AsyncHandler(async (req, res) => {
  clientHelpers.douserLogin(req.body).then((response) => {
    if (response.status) {
      const token = jwt.sign(
        {
          userId: response.user._id,
          name: response.user.fname,
          email: response.user.email,
        },
        'fityou5055'
      );
      return res.json({ status: 'ok', user: token });
    }
    res.json({ status: 'error', user: false });
  });
});

const ClientDetails = AsyncHandler(async (req, res) => {
  const id = req.params.id;
  CommenHelpers.findClientById(id)
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', userDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});
const freeVideo = AsyncHandler(async (req, res) => {
  console.log('here');
  clientHelpers
    .freeVideo()
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', allvideo: details });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});
const clientSendOtp = AsyncHandler(async (req, res) => {
  // console.log(req.body);
  // res.json({ status: true });

  clientHelpers
    .sendOTPVerificationEmail(req.body)
    .then((data) => res.json({ status: true }))
    .catch((error) => res.json({ status: false, message: error }));
});
const verifiyOtp = AsyncHandler(async (req, res) => {
  clientHelpers.otpLogin(req.body).then((response) => {
    if (response.status) {
      const token = jwt.sign(
        {
          userId: response.user._id,
          name: response.user.fname,
          email: response.user.email,
        },
        'fityou5055'
      );
      return res.json({ status: 'ok', user: token });
    }
    res.json({ status: 'error', user: false });
  });
});
// exports
module.exports = {
  clientLogin,
  ClientDetails,
  clientSendOtp,
  freeVideo,
  verifiyOtp,
};
