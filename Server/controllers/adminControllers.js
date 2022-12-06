const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const adminHelpers = require('../helpers/adminHelpers');

const adminLogin = AsyncHandler(async (req, res) => {
  console.log(req.body);
  adminHelpers.doadminLogin(req.body).then((response) => {
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
  adminLogin,
};
