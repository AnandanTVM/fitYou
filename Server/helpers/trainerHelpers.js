const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const db = require('../config/connection');
const collection = require('../config/collection');
const { SendOTP } = require('../middlewares/SendEmail');
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
            $or: [{ status: 'Active PT' }, { status: 'Verified' }],
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
          $or: [{ status: 'Active PT' }, { status: 'Verified' }],
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
  trainerDetailsUpdate: (details, id) =>
    new Promise((resolve, reject) => {
      const timeslot = [
        { time: '5 am', userId: false },
        { time: '6 am', userId: false },
        { time: '7 am', userId: false },
        { time: '8 am', userId: false },
        { time: '4 pm', userId: false },
        { time: '5 pm', userId: false },
        { time: '6 pm', userId: false },
        { time: '7 pm', userId: false },
        { time: '8 pm', userId: false },
        { time: '9 pm', userId: false },
        { time: '10 pm', userId: false },
      ];
      db.get()
        .collection(collection.TRAINER_COLLECTION)
        .updateOne(
          { _id: id },
          {
            $set: {
              status: 'Active PT',
              profilePic: details.profilePic,
              address: details.address,
              aadharNumber: details.aadharNumber,
              aadharFront: details.aadharFront,
              aadharBack: details.aadharBack,
              timeslot: timeslot,
              block: false,
            },
          }
        )
        .then(() => resolve())
        .catch(() => reject());
    }),
  allotedClientDetails: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const Clients = await db
          .get()
          .collection(collection.PURCHASE_COLLECTION)
          .aggregate([
            {
              $match: { trainerId: ObjectId(id), planStatus: 'Active' },
            },
            {
              $lookup: {
                from: collection.CLIENT_COLLECTION,
                localField: 'userId',
                foreignField: '_id',
                as: 'Clientdetails',
              },
            },
            {
              $project: {
                time: 1,
                validtill: 1,
                validfrom: 1,
                paymentStatus: 1,
                amount: 1,
                Clientdetails: { $arrayElemAt: ['$Clientdetails', 0] },
                // arrayElemAt userd to convert array to object
              },
            },
            {
              $project: {
                time: 1,
                validtill: 1,
                paymentStatus: 1,

                Clientdetails: {
                  _id: 1,
                  fname: 1,
                  lname: 1,
                  dob: 1,
                  gender: 1,
                },
              },
            },
          ])
          .toArray();

        resolve(Clients);
      } catch (error) {
        reject(error);
      }
    }),
  ClientDetails: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const Clients = await db
          .get()
          .collection(collection.PURCHASE_COLLECTION)
          .aggregate([
            {
              $match: { _id: ObjectId(id) },
            },
            {
              $lookup: {
                from: collection.CLIENT_COLLECTION,
                localField: 'userId',
                foreignField: '_id',
                as: 'Clientdetails',
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
                time: 1,
                validtill: 1,
                validfrom: 1,
                paymentStatus: 1,
                amount: 1,
                plan: { $arrayElemAt: ['$plan', 0] },
                Clientdetails: { $arrayElemAt: ['$Clientdetails', 0] },
                // arrayElemAt userd to convert array to object
              },
            },
            {
              $project: {
                amount: 0,
                plan: {
                  validFor: 0,
                  mrp: 0,
                  offerRate: 0,
                  discretion: 0,
                  proGymsTips: 0,
                  groupWorkouts: 0,
                  perstionalTrainer: 0,
                  smartWorkoutPlan: 0,
                  validfor: 0,
                  remove: 0,
                },
                Clientdetails: {
                  email: 0,
                  password: 0,
                  phone: 0,
                  block: 0,
                  otp: 0,
                },
              },
            },
          ])
          .toArray();

        resolve(Clients);
      } catch (error) {
        reject(error);
      }
    }),
  profile: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const data = await db
          .get()
          .collection(collection.TRAINER_COLLECTION)
          .aggregate([
            { $match: { _id: id } },
            { $project: { password: 0, date: 0, block: 0, otp: 0, link: 0 } },
          ])
          .toArray();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  getTrainerVideo: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const data = await db
          .get()
          .collection(collection.VIDEO_COLLECTION)
          .aggregate([
            { $match: { creatorId: id.toString() } },
            // { $project: { password: 0, date: 0, block: 0, otp: 0, link: 0 } },
          ])
          .toArray();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
};
