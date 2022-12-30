const bcrypt = require('bcrypt');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const { ObjectId } = require('mongodb');
const db = require('../config/connection');
const collection = require('../config/collection');
const { SendOTP } = require('../middlewares/SendEmail');

// const { response, json } = require('express')

const instance = new Razorpay({
  key_id: process.env.RAZOPAY_KERY_ID,
  key_secret: process.env.RAZOPAY_KEY_SECRET,
});

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
  placeOdder: (data) =>
    new Promise((resolve, reject) => {
      let details = data;
      let validfrom = new Date();
      const validtill = new Date();
      validtill.setMonth(validfrom.getMonth() + details.validfor);
      details.validfrom = validfrom;
      details.validtill = validtill;
      details.paymentStatus = 'Pending';
      delete details.validfor;
      db.get()
        .collection(collection.PURCHASE_COLLECTION)
        .insertOne(details)
        .then((response) => {
          const id = response.insertedId.toHexString();
          resolve(id);
        })
        .catch((error) => {
          reject(error);
        });
    }),
  generateRazorpay: (id, amount) =>
    new Promise((resolve, reject) => {
      instance.orders.create(
        {
          amount: amount,
          currency: 'INR',
          receipt: `${id}`,
          notes: {
            key1: 'value3',
            key2: 'value2',
          },
        },
        (err, order) => {
          if (err) {
            reject(err);
          }
          resolve(order);
        }
      );
    }),
  verifiyPayment: (details) =>
    new Promise((resolve, reject) => {
      let hmac = crypto.createHmac('sha256', process.env.RAZOPAY_KEY_SECRET);
      hmac.update(
        `${details.res.razorpay_order_id}|${details.res.razorpay_payment_id}`
      );
      hmac = hmac.digest('hex');
      if (hmac === details.res.razorpay_signature) {
        resolve();
      } else {
        reject();
      }
    }),
  changePaymentStatus: (details) =>
    new Promise((resolve, reject) => {
      console.log(details.receipt);
      db.get()
        .collection(collection.PURCHASE_COLLECTION)
        .updateOne(
          { _id: ObjectId(details.receipt) },
          {
            $set: { paymentStatus: 'Completed' },
          }
        )
        .then(() => {
          resolve();
        })
        .catch(() => reject());
    }),
};
