const bcrypt = require('bcrypt');
const db = require('../config/connection');
const collection = require('../config/collection');
const { SendOTP } = require('../middlewares/SendEmail');

// const { ObjectId, Db } = require('mongodb')
// const { response, json } = require('express')

module.exports = {
  douserLogin: (userData) =>
    new Promise(async (resolve) => {
      const response = {};
      const user = await db
        .get()
        .collection(collection.CLIENT_COLLECTION)
        .findOne({ phone: userData.Phone });

      if (user) {
        bcrypt.compare(userData.password, user.password).then((status) => {
          if (status) {
            response.user = user;
            response.status = true;
            resolve(response);
          } else {
            resolve({ status: false });
          }
        });
      } else {
        resolve({ status: false });
      }
    }),
  freeVideo: () =>
    new Promise(async (resolve, reject) => {
      const video = await db
        .get()
        .collection(collection.VIDEO_COLLECTION)
        .find({ type: 'Free' })
        .toArray();
      if (video) {
        resolve(video);
      } else {
        reject();
      }
    }),
  sendOTPVerificationEmail: (data) =>
    new Promise(async (resolve, reject) => {
      const user = await db
        .get()
        .collection(collection.CLIENT_COLLECTION)
        .findOne({ phone: data.Phone });
      if (user) {
        if (user.block) {
          const err = 'User is blocked pls contact admin..';
          console.log('here on err');
          reject(err);
        } else {
          try {
            console.log(user);
            const fullname = `${user.fname} ${user.lname}`;
            const { email } = user;
            const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
            const hasotp = await bcrypt.hash(otp, 10);
            db.get()
              .collection(collection.CLIENT_COLLECTION)
              .updateOne(
                {
                  _id: user._id,
                },
                {
                  $set: {
                    otp: hasotp,
                  },
                }
              )
              .then((response) => {
                console.log(response);
                SendOTP(otp, email, fullname).then((data) =>
                  resolve({ status: true })
                );
              });
          } catch (error) {
            reject(error);
          }
        }
      } else {
        const err = 'User not found..';
        reject(err);
      }
    }),
  otpLogin: (userData) =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve) => {
      const response = {};
      const user = await db
        .get()
        .collection(collection.CLIENT_COLLECTION)
        .findOne({ phone: userData.Phone });

      if (user) {
        bcrypt.compare(userData.otp, user.otp).then((status) => {
          if (status) {
            response.user = user;
            response.status = true;
            resolve(response);
          } else {
            resolve({ status: false });
          }
        });
      } else {
        resolve({ status: false });
      }
    }),
};
