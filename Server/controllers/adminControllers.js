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

// exports
module.exports = {
  adminLogin,
  userInfo,
};
