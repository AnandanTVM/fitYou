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
  sendChat: (to, from, data) =>
    new Promise((resolve, reject) => {
      // Date settings start
      const cueentDate = new Date();
      const time = cueentDate.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      const date = new Date().toLocaleDateString();
      const mess = {
        message: data.message,
        date: date,
        time: time,
      };
      // Date settings end
      db.get()
        .collection(collection.CHAT_COLLECTION)
        .findOne({ to: ObjectId(to), from: from })
        .then((responce) => {
          if (responce === null) {
            const messages = [mess];

            db.get()
              .collection(collection.CHAT_COLLECTION)
              .insertOne({
                to: ObjectId(to),
                from: from,
                messages: messages,
              })
              .then(() => resolve())
              .catch(() => reject());
          } else {
            const messages = mess;

            db.get()
              .collection(collection.CHAT_COLLECTION)
              .updateOne(
                {
                  to: ObjectId(to),
                  from: from,
                },
                {
                  $push: { messages: messages },
                }
              )
              .then(() => resolve())
              .catch(() => reject());
          }
        })
        .catch(() => reject());
    }),
  getAllMessage: (to, from) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = {};
        let fromMessage = await db
          .get()
          .collection(collection.CHAT_COLLECTION)
          .aggregate([
            { $match: { to: ObjectId(to), from: from } },
            // { $group: { _id: from } },
            { $unwind: '$messages' },
            { $project: { _id: 1, messages: 1 } },
          ])
          .toArray();
        console.log(fromMessage);
        let toMessage = await db
          .get()
          .collection(collection.CHAT_COLLECTION)
          .aggregate([
            { $match: { to: from, from: ObjectId(to) } },
            // { $group: { _id: from } },
            { $unwind: '$messages' },
            { $project: { _id: 1, messages: 1 } },
          ])
          .toArray();
        if (fromMessage === null) {
          fromMessage = false;
          response.from = fromMessage;
        } else {
          response.from = fromMessage;
        }
        if (toMessage === null) {
          toMessage = false;
          response.to = toMessage;
        } else {
          response.to = toMessage.messages;
        }
        console.log(response);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    }),
};
