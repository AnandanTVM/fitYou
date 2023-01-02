const bcrypt = require('bcrypt');
const db = require('../config/connection');
const collection = require('../config/collection');
const { SendOTP } = require('../middlewares/SendEmail');
// const { ObjectId, Db } = require('mongodb')
// const { response, json } = require('express')

module.exports = {
  trainerdoLogin: (data) =>
    new Promise(async (resolve) => {
      console.log('her on helpers');
      console.log(data);
      const response = {};
      try {
        const user = await db
          .get()
          .collection(collection.TRAINER_COLLECTION)
          .findOne({
            phone: data.Phone,
            $or: [{ status: 'Active PT' }, { status: 'Veifiyed' }],
          });
        console.log(user);
        if (user !== null) {
          bcrypt
            .compare(data.password, user.password)
            .then((status) => {
              if (status) {
                response.trainer = user;
                response.status = true;
                resolve(response);
              } else {
                resolve({ status: false });
              }
            })
            .catch((err) => resolve({ status: false }));
        } else {
          console.log('error');
          resolve({ status: false });
        }
      } catch (error) {
        console.log(error);
      }
    }),
  sendOTPVerificationEmail: (data) =>
    new Promise(async (resolve, reject) => {
      const user = await db
        .get()
        .collection(collection.TRAINER_COLLECTION)
        .findOne({
          phone: data.Phone,
          $or: [{ status: 'Active PT' }, { status: 'Veifiyed' }],
        });
      if (user) {
        if (user.block) {
          const err = 'User is blocked pls contact admin..';
          reject(err);
        } else {
          try {
            const fullname = `${user.fname} ${user.lname}`;
            const { email } = user;
            const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
            const hasotp = await bcrypt.hash(otp, 10);
            console.log(user);
            db.get()
              .collection(collection.TRAINER_COLLECTION)
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
        .collection(collection.TRAINER_COLLECTION)
        .findOne({ phone: userData.Phone });

      if (user) {
        bcrypt.compare(userData.otp, user.otp).then((status) => {
          console.log(status);
          if (status) {
            response.trainer = user;
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
