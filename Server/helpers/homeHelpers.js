const bcrypt = require('bcrypt');
// const { ObjectId, Db } = require('mongodb');
// const { response, json } = require('express');
const collection = require('../config/collection');
const db = require('../config/connection');

module.exports = {
  doClientSignup: (data) =>
    new Promise((resolve, reject) => {
      // eslint-disable-next-line prefer-const
      let details = data;
      details.block = false;
      db.get()
        .collection(collection.CLIENT_COLLECTION)
        .findOne({ phone: details.phone })
        .then(async (extphone) => {
          if (extphone == null) {
            details.password = await bcrypt.hash(details.password, 10);
            db.get()
              .collection(collection.CLIENT_COLLECTION)
              .insertOne(details)
              .then(() => {
                resolve({ phoneFound: false });
              })
              .catch((error) => {
                reject(error);
              });
          } else {
            resolve({ phoneFound: true });
          }
        });
    }),

  dotrainerSignup: (data) =>
    new Promise((resolve, reject) => {
      // const extphone = await
      let details = data;
      db.get()
        .collection(collection.TRAINER_COLLECTION)
        .findOne({ phone: details.phone })
        .then(async (extphone) => {
          if (extphone == null) {
            details.password = await bcrypt.hash(details.password, 10);
            db.get()
              .collection(collection.TRAINER_COLLECTION)
              .insertOne(details)
              .then(() => {
                resolve();
              })
              .catch((error) => {
                reject(error);
              });
          } else {
            reject();
          }
        })
        .catch((err) => {
          reject(err);
        });
    }),

  viewAllPlan: async () =>
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.PACKAGE_COLLECTION)
          .find({ remove: false })
          .toArray();
        resolve(details);
      } catch (error) {
        reject();
      }
    }),
};
