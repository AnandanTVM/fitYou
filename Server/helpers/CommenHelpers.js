const { ObjectId } = require('mongodb');
// const nodemailer = require('nodemailer');
const db = require('../config/connection');
const collection = require('../config/collection');

// node mailer confige

module.exports = {
  findAdminById: (userId) =>
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
  findClientById: (userId) =>
    new Promise(async (resolve, reject) => {
      try {
        const user = await db
          .get()
          .collection(collection.CLIENT_COLLECTION)
          .findOne({ _id: ObjectId(userId) });

        resolve(user);
      } catch (err) {
        reject();
      }
    }),
  findTrainerById: (userId) =>
    new Promise(async (resolve, reject) => {
      try {
        const user = await db
          .get()
          .collection(collection.TRAINER_COLLECTION)
          .findOne({ _id: ObjectId(userId) });

        resolve(user);
      } catch (err) {
        reject();
      }
    }),
  viewAllPlan: async () =>
    // eslint-disable-next-line no-async-promise-executor
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
  uploadVideo: (data) =>
    new Promise((resolve, reject) => {
      try {
        db.get().collection(collection.VIDEO_COLLECTION).insertOne(data);
        resolve();
      } catch (error) {
        reject();
      }
    }),
  allTrainerDetails: () =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.TRAINER_COLLECTION)
          .find({ status: 'Active PT' })
          .toArray();
        console.log(details);
        resolve(details);
      } catch (err) {
        reject();
      }
    }),
  planDetailsById: (Id) =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve, reject) => {
      try {
        const plan = await db
          .get()
          .collection(collection.PACKAGE_COLLECTION)
          .findOne({ _id: ObjectId(Id) });

        resolve(plan);
      } catch (err) {
        reject();
      }
    }),
  getVideoById: (Id) =>
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve, reject) => {
      try {
        const video = await db
          .get()
          .collection(collection.VIDEO_COLLECTION)
          .findOne({ _id: ObjectId(Id) });
        console.log(video);
        resolve(video);
      } catch (err) {
        reject(err);
      }
    }),
};
