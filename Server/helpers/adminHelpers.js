const { ObjectId } = require('mongodb');
const db = require('../config/connection');
const collection = require('../config/collection');

// const { response, json } = require('express')

module.exports = {
  doadminLogin: (userData) =>
    new Promise(async (resolve) => {
      const response = {};
      const user = await db
        .get()
        .collection(collection.ADMIN_COLLECTION)
        .findOne({ phone: userData.Phone });
      if (user) {
        response.user = user;
        response.status = true;
        resolve(response);
      } else {
        resolve({ status: false });
      }
    }),
  findById: (userId) =>
    new Promise(async (resolve, reject) => {
      try {
        const user = await db
          .get()
          .collection(collection.ADMIN_COLLECTION)
          .findOne({ _id: ObjectId(userId) });

        resolve(user);
      } catch (err) {
        reject();
      }
    }),
  userdetails: () =>
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.CLIENT_COLLECTION)
          .find()
          .toArray();
        resolve(details);
      } catch (error) {
        reject();
      }
    }),
  editUser: (data) =>
    new Promise((resolve, reject) => {
      try {
        db.get()
          .collection(collection.CLIENT_COLLECTION)
          .updateOne(
            {
              _id: ObjectId(data.userid),
            },
            {
              $set: {
                fname: data.fname,
                lname: data.lname,
                dob: data.dob,
                gender: data.gender,
                email: data.email,
                phone: data.phone,
                weight: data.weight,
                height: data.height,
              },
            }
          )
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      } catch (error) {
        console.log(error);
      }
    }),

  // give trainer details for approvel so this retuns only penging list
  trainerApprovel: () =>
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.TRAINER_COLLECTION)
          .find({ status: 'Pending' })
          .toArray();
        resolve(details);
      } catch (error) {
        reject();
      }
    }),
  trainerDetails: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.TRAINER_COLLECTION)
          .find({ _id: ObjectId(id) })
          .toArray();
        resolve(details);
      } catch (error) {
        reject();
      }
    }),
};
