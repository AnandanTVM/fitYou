const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const adminHelpers = require('../helpers/adminHelpers');

const adminLogin = AsyncHandler(async (req, res) => {
  adminHelpers.doadminLogin(req.body).then((response) => {
    if (response.status) {
      const token = jwt.sign(
        {
          userId: response.user._id,
          name: response.user.name,
          email: response.user.email,
        },
        process.env.JWT_SECRET
      );
      return res.json({ status: 'ok', user: token });
    }
    res.json({ status: 'error', user: false });
  });
});

const userInfo = AsyncHandler((req, res) => {
  adminHelpers
    .userdetails()
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', clientDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});

const updateUserInfo = AsyncHandler(async (req, res) => {
  await adminHelpers
    .editUser(req.body)
    .then(() => res.json({ status: true }))
    .catch(() => res.json({ status: false }));
});
const trainerApprovel = AsyncHandler((req, res) => {
  adminHelpers
    .trainerApprovel()
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', clientDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});
const getTrainerDetails = AsyncHandler((req, res) => {
  const id = req.params.id;
  adminHelpers
    .trainerDetails(id)
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', trainerDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});
const getuserDetails = AsyncHandler((req, res) => {
  const id = req.params.id;
  adminHelpers
    .userDetails(id)
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', userDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});
const rejectTrainer = AsyncHandler((req, res) => {
  const id = req.params.id;

  adminHelpers
    .rejectTrainer(id)
    .then((details) => {
      console.log(details);

      res.json({ status: 'ok', rejected: true, trainerDetails: details });
    })
    .catch((err) => {
      console.log(err);
    });
});

// exports
module.exports = {
  adminLogin,
  userInfo,
  updateUserInfo,
  trainerApprovel,
  getTrainerDetails,
  getuserDetails,
  rejectTrainer,
};
