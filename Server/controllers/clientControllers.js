/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const clientHelpers = require('../helpers/clientHelpers');
const CommenHelpers = require('../helpers/CommenHelpers');

const clientLogin = AsyncHandler(async (req, res) => {
  clientHelpers.douserLogin(req.body).then((response) => {
    if (response.status) {
      const token = jwt.sign(
        {
          // eslint-disable-next-line no-underscore-dangle
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
const allTrainerDetails = AsyncHandler(async (req, res) => {
  clientHelpers
    .allTrainerDetails()
    .then((details) => {
      console.log(details);

      res.json({ status: true, trainerDetails: details });
    })
    .catch((err) => {
      res.json({ status: false, message: err });
    });
});
const planDetails = AsyncHandler(async (req, res) => {
  const id = req.params.id;
  CommenHelpers.planDetailsById(id)
    .then((details) => {
      res.json({ status: true, package: details });
    })
    .catch((err) => {
      res.json({ status: false, message: err });
    });
});
const placeOdder = AsyncHandler(async (req, res) => {
  const data = req.body;
  switch (data.validfor) {
    case '1 Month':
      data.validfor = 1;
      break;
    case '2 Month':
      data.validfor = 2;
      break;
    case '3 Month':
      data.validfor = 3;
      break;
    case '4 Month':
      data.validfor = 4;
      break;
    case '5 Month':
      data.validfor = 5;
      break;
    case '6 Month':
      data.validfor = 6;
      break;
    case '7 Month':
      data.validfor = 7;
      break;
    case '8 Month':
      data.validfor = 8;
      break;
    case '9 Month':
      data.validfor = 9;
      break;
    case '10 Month':
      data.validfor = 10;
      break;
    case '11 Month':
      data.validfor = 11;
      break;
    case '12 Month':
      data.validfor = 12;
      break;

    default:
      res.json({ status: false, message: 'ERROR' });
      break;
  }
  console.log(data);
  clientHelpers
    .placeOdder(data)
    .then((id) => {
      clientHelpers
        .generateRazorpay(id, data.amount)
        .then((order) => {
          res.json({ status: true, order: order });
        })
        .catch((err) => res.json({ status: false, error: err }));
    })
    .catch((err) => {
      res.json({ status: false, error: err });
    });
});
const verifiyPayment = AsyncHandler(async (req, res) => {
  clientHelpers
    .verifiyPayment(req.body)
    .then(() => {
      clientHelpers
        .changePaymentStatus(req.body.order)
        .then(() => {
          res.json({ status: true, Message: 'payment Sucessfull... ' });
        })
        .catch(() => {
          clientHelpers.changePaymentStatusCancel(req.body.order).then(() => {
            res.json({ status: false, err: 'Payment Failed' }).catch((err) => {
              res.json({ status: false, err: err.message });
            });
          });
        });
    })
    .catch(() => {
      res.json({ status: false, err: 'Payment Failed' });
    });
});
const getClientPlan = AsyncHandler(async (req, res) => {
  const { id } = req.params;

  clientHelpers
    .getClientPlan(id)
    .then((details) => {
      res.json({ status: true, package: details });
    })
    .catch((err) => {
      res.json({ status: false, message: err });
    });
});
const getVideo = AsyncHandler(async (req, res) => {
  const vid = req.params.id;
  console.log(vid);

  CommenHelpers.getVideoById(vid)
    .then((details) => {
      res.json({ status: true, video: details });
    })
    .catch((err) => {
      res.json({ status: false, message: err });
    });
});
const sendMessage = AsyncHandler(async (req, res) => {
  const to = req.params.tId;
  // eslint-disable-next-line no-underscore-dangle
  const from = req.user._id;
  CommenHelpers.sendChat(to, from, req.body)
    .then(() => res.json({ status: true, message: 'successfull' }))
    .catch((err) => res.json({ status: false, message: err }));
});
const gettrainerDetails = AsyncHandler(async (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const userId = req.user._id;
  clientHelpers
    .gettrainerDetails(userId)
    .then((details) => res.json({ status: true, trainerDetails: details }))
    .catch((err) => res.json({ status: false, message: err }));
});
const getMessage = AsyncHandler(async (req, res) => {
  const to = req.params.tId;
  const from = req.user._id;

  CommenHelpers.getAllMessage(to, from)
    .then((responce) =>
      res.json({
        status: true,
        to: responce.to,
        from: responce.from,
        messages: responce.message,
      })
    )
    .catch((err) => {
      console.log(err);
      res.json({ status: false, message: err });
    });
});
const slotBookControl = AsyncHandler((req, res) => {
  const values = {
    userId: req.user._id,
    trainerId: req.params.tId,
    index: req.body.index,
  };
  if (values.index > 10) {
    res.status(422).json({ status: false, Message: 'Invalid Index' });
  } else {
    clientHelpers
      .BookSlot(values)
      .then((responce) => res.json({ status: true, responce: responce }))
      .catch((err) => res.json({ status: false, Message: err.message }));
  }
});
// exports
module.exports = {
  clientLogin,
  ClientDetails,
  clientSendOtp,
  freeVideo,
  verifiyOtp,
  planDetails,
  allTrainerDetails,
  placeOdder,
  verifiyPayment,
  getClientPlan,
  getVideo,
  sendMessage,
  gettrainerDetails,
  getMessage,
  slotBookControl,
};
