/* eslint-disable no-async-promise-executor */
const bcrypt = require('bcrypt');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const { ObjectId } = require('mongodb');
const db = require('../config/connection');
const collection = require('../config/collection');
const {
  SendOTP,
  SendPackagePlasedMessage,
} = require('../middlewares/SendEmail');

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
      details.planStatus = 'Pending';
      delete details.validfor;
      details.trainerId = ObjectId(details.trainerId);
      details.userId = ObjectId(details.userId);
      details.planId = ObjectId(details.planId);
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
          amount: amount * 100,
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
    new Promise(async (resolve, reject) => {
      try {
        const purchase = await db
          .get()
          .collection(collection.PURCHASE_COLLECTION)
          .findOneAndUpdate(
            { _id: ObjectId(details.receipt) },
            {
              $set: { paymentStatus: 'Completed', planStatus: 'Active' },
            }
          );

        const userdetails = await db
          .get()
          .collection(collection.CLIENT_COLLECTION)
          .findOne({ _id: purchase.value.userId });

        const name = `${userdetails.fname} ${userdetails.lname}`;
        SendPackagePlasedMessage(userdetails.email, name).then(() => {
          resolve();
        });
        resolve();
      } catch (error) {
        reject();
      }
    }),
  changePaymentStatusCancel: (details) =>
    new Promise(async (resolve, reject) => {
      try {
        const purchase = await db
          .get()
          .collection(collection.PURCHASE_COLLECTION)
          .findOneAndUpdate(
            { _id: ObjectId(details.receipt) },
            {
              $set: { paymentStatus: 'cancelled', planStatus: 'cancel' },
            }
          );

        // const userdetails = await db
        //   .get()
        //   .collection(collection.CLIENT_COLLECTION)
        //   .findOne({ _id: purchase.value.userId });

        // const name = `${userdetails.fname} ${userdetails.lname}`;
        // SendPackagePlasedMessage(userdetails.email, name).then(() => {
        //   resolve();
        // });
        resolve();
      } catch (error) {
        reject();
      }
    }),
  getClientPlan: (id) =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.PURCHASE_COLLECTION)
          .aggregate([
            {
              $match: { userId: ObjectId(id), planStatus: 'Active' },
            },
            {
              // to join anothtre table fields to current table
              $lookup: {
                from: collection.TRAINER_COLLECTION,
                localField: 'trainerId',
                foreignField: '_id',
                as: 'trainer',
              },
            },
            {
              $lookup: {
                from: collection.PACKAGE_COLLECTION,
                localField: 'planId',
                foreignField: '_id',
                as: 'plan',
              },
            },
            {
              $project: {
                validtill: 1,
                validfrom: 1,
                paymentStatus: 1,
                trainer: { $arrayElemAt: ['$trainer', 0] },
                plan: { $arrayElemAt: ['$plan', 0] },
                // arrayElemAt userd to convert array to object
              },
            },
            {
              $project: {
                trainer: {
                  dob: 0,
                  password: 0,
                  link: 0,
                  block: 0,
                  date: 0,
                  phone: 0,
                },
                plan: {
                  remove: 0,
                  offerRate: 0,
                },
              },
            },
          ])
          .toArray();

        if (details[0]) {
          const timestamp = details[0].validtill;
          const timefor = details[0].validfrom;
          const vaild = new Date(Date.parse(timestamp));
          const from = new Date(Date.parse(timefor));
          // date converting part
          const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZone: 'UTC',
          };
          const formatter = new Intl.DateTimeFormat('en-US', options);

          // outputs "12/31/2022, 6:46 PM"
          details[0].validtill = formatter.format(vaild);
          details[0].validfrom = formatter.format(from);

          resolve(details);
        } else {
          reject();
        }
      } catch (error) {
        reject(error);
      }
    }),
  allTrainerDetails: () =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.TRAINER_COLLECTION)
          .find({ $and: [{ status: 'Active PT' }, { block: false }] })
          .toArray();

        resolve(details);
      } catch (err) {
        reject();
      }
    }),
  gettrainerDetails: (id) =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.PURCHASE_COLLECTION)
          .aggregate([
            {
              $match: { userId: id, planStatus: 'Active' },
            },
            {
              // to join anothtre table fields to current table
              $lookup: {
                from: collection.TRAINER_COLLECTION,
                localField: 'trainerId',
                foreignField: '_id',
                as: 'trainer',
              },
            },
            {
              $project: {
                _id: 0,
                trainer: { $arrayElemAt: ['$trainer', 0] },
                // arrayElemAt userd to convert array to object
              },
            },
            {
              $project: {
                trainer: {
                  _id: 1,
                  fname: 1,
                  lname: 1,
                  email: 1,
                  profilePic: 1,
                },
              },
            },
          ])
          .toArray();

        resolve(details);
      } catch (error) {
        reject(error);
      }
    }),
  BookSlot: (values) =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve, reject) => {
      const details = await db
        .get()
        .collection(collection.TRAINER_COLLECTION)
        .aggregate([
          { $match: { _id: ObjectId(values.trainerId) } },
          { $project: { timeslot: 1, _id: 0 } },
        ])
        .toArray();
      // resolve(details[0].timeslot);
      const times = details[0].timeslot;
      let isPresent = false;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < times.length; i++) {
        if (times[i].userId.toString() === values.userId.toString()) {
          isPresent = i;
          break;
        }
      }
      if (isPresent) {
        db.get()
          .collection(collection.TRAINER_COLLECTION)
          .updateOne(
            { _id: ObjectId(values.trainerId) },
            {
              $set: {
                [`timeslot.${values.index}.userId`]: values.userId,
                [`timeslot.${isPresent}.userId`]: false,
              },
            }
          )
          .then(() => resolve())
          .catch((err) => reject(err));
      } else {
        db.get()
          .collection(collection.TRAINER_COLLECTION)
          .updateOne(
            { _id: ObjectId(values.trainerId) },
            { $set: { [`timeslot.${values.index}.userId`]: values.userId } }
          )
          .then(() => resolve())
          .catch((err) => reject(err));
      }
    }),
};
