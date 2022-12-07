const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const adminHelpers = require('../helpers/adminHelpers');

const adminprotect = AsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await adminHelpers.findById(decoded.userId);

      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, token fail');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Autherized');
  }
});
module.exports = {
  adminprotect,
};
