/* eslint-disable prettier/prettier */
// const { response } = require('express');
// const json = require('express');
const AsyncHandler = require('express-async-handler');
const homeHelper = require('../helpers/homeHelpers');

const clientSignup = AsyncHandler(async (req, res) => {
  const data = req.body;
  // remove unwated feild from object
  delete data.cpassword;
  homeHelper
    .doClientSignup(data)
    .then((response) => {
      if (response.phoneFound) {
        res
          .status(409)
          .json({ status: 'error', error: 'Duplicate Phone number' });
      } else {
        res.json({ status: 'success' });
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
});

const trainerSignup = AsyncHandler((req, res) => {
  const data = req.body;
  const ytUrl = data.link;
  data.link = ytUrl.replace('/watch?v=', '/embed/');
  data.block = false;
  data.date = new Date();
  data.status = 'Pending';
  homeHelper
    .dotrainerSignup(data)
    .then(() => {
      res.json({ status: 'success' });
    })
    .catch((err) => {
      res
        .status(409)
        .json({ status: 'error', error: 'Duplicate Phone number', stack: err });
    });
});
const viewAllPlan = AsyncHandler((req, res) => {
  homeHelper
    .viewAllPlan()
    .then((response) => {
      res.json({ status: 'success', response: response });
    })
    .catch((err) => {
      throw new Error(err);
    });
});

// exports
module.exports = {
  clientSignup,
  trainerSignup,
  viewAllPlan,
};
