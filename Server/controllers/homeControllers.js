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
        res.json({ status: 'error', error: 'Duplicate Phone number' });
      } else {
        res.json({ status: 'success' });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

const trainerSignup = AsyncHandler(async (req, res) => {
  const data = req.body;
  // remove unwated feild from object
  delete data.cpassword;
  homeHelper
    .dotrainerSignup(data)
    .then((response) => {
      if (response.phoneFound) {
        res.json({ status: 'error', error: 'Duplicate Phone number' });
      } else {
        res.json({ status: 'success' });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  
});

// exports
module.exports = {
  clientSignup,
  trainerSignup,
};
