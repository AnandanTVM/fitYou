const AsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const CommenHelpers = require('../helpers/CommenHelpers');

const adminprotect = AsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await CommenHelpers.findClientById(decoded.userId);

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

const Clientprotect = AsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await CommenHelpers.findClientById(decoded.userId);

      next();
    } catch (error) {
      console.log('failed token');
      res.status(401);
      throw new Error('Not authorized, token fail');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Autherized');
  }
});
const Trainerprotect = AsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded);
      req.user = await CommenHelpers.findTrainerById(decoded.trainerId);

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
  Clientprotect,
  Trainerprotect,
};
