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
  editUser: () =>
    new Promise((resolve, reject) => {
      db.get()
        .collection(collection.User_COLLECTION)
        .updateOne(
          {
            _id: ObjectId(data.id),
          },
          {
            $set: {
              email: data.email,
              name: data.name,
            },
          }
        )
        .then((response) => {
          resolve();
        });
    }),
};
