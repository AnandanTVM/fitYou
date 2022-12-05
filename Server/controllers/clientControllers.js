const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const clientHelpers = require('../helpers/clientHelpers');

const clientLogin = AsyncHandler(async (req, res) => {
  clientHelpers.douserLogin(req.body).then((response) => {
    console.log(response);
    if (response.status) {
      const token = jwt.sign(
        {
          userId: response.user._id,
          name: response.user.name,
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
};
