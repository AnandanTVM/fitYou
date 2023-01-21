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
                email: data.email,
                phone: data.phone,
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
  activeTrainerdetails: () =>
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.TRAINER_COLLECTION)
          .find({ $or: [{ status: 'Active PT' }, { status: 'Verified' }] })
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
  userDetails: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.CLIENT_COLLECTION)
          .find({ _id: ObjectId(id) })
          .toArray();
        resolve(details);
      } catch (error) {
        reject();
      }
    }),
  rejectTrainer: (data) =>
    new Promise((resolve, reject) => {
      try {
        db.get()
          .collection(collection.TRAINER_COLLECTION)
          .updateOne(
            {
              _id: ObjectId(data),
            },
            {
              $set: {
                status: 'Reject',
              },
            }
          )
          .then(async () => {
            const details = await db
              .get()
              .collection(collection.TRAINER_COLLECTION)
              .find({ _id: ObjectId(data) })
              .toArray();
            resolve(details);
          })
          .catch(() => {
            reject();
          });
      } catch (error) {
        console.log(error);
      }
    }),
  approvelTrainer: (data) =>
    new Promise((resolve, reject) => {
      try {
        db.get()
          .collection(collection.TRAINER_COLLECTION)
          .updateOne(
            {
              _id: ObjectId(data),
            },
            {
              $set: {
                status: 'Verified',
              },
            }
          )
          .then(async () => {
            const details = await db
              .get()
              .collection(collection.TRAINER_COLLECTION)
              .find({ _id: ObjectId(data) })
              .toArray();
            resolve(details);
          })
          .catch(() => {
            reject();
          });
      } catch (error) {
        console.log(error);
      }
    }),
  unBlockTrainer: (data) =>
    new Promise((resolve, reject) => {
      try {
        db.get()
          .collection(collection.TRAINER_COLLECTION)
          .updateOne(
            {
              _id: ObjectId(data),
            },
            {
              $set: {
                block: false,
              },
            }
          )
          .then(async () => {
            const details = await db
              .get()
              .collection(collection.TRAINER_COLLECTION)
              .find({ $or: [{ status: 'Active PT' }, { status: 'Verified' }] })
              .toArray();
            resolve(details);
          })
          .catch(() => {
            reject();
          });
      } catch (error) {
        console.log(error);
      }
    }),
  blockTrainer: (data) =>
    new Promise((resolve, reject) => {
      try {
        db.get()
          .collection(collection.TRAINER_COLLECTION)
          .updateOne(
            {
              _id: ObjectId(data),
            },
            {
              $set: {
                block: true,
              },
            }
          )
          .then(async () => {
            const details = await db
              .get()
              .collection(collection.TRAINER_COLLECTION)
              .find({ $or: [{ status: 'Active PT' }, { status: 'Verified' }] })
              .toArray();
            resolve(details);
          })
          .catch(() => {
            reject();
          });
      } catch (error) {
        console.log(error);
      }
    }),
  unBlockUser: (data) =>
    new Promise((resolve, reject) => {
      try {
        db.get()
          .collection(collection.CLIENT_COLLECTION)
          .updateOne(
            {
              _id: ObjectId(data),
            },
            {
              $set: {
                block: false,
              },
            }
          )
          .then(async () => {
            const details = await db
              .get()
              .collection(collection.CLIENT_COLLECTION)
              .find()
              .toArray();
            resolve(details);
          })
          .catch(() => {
            reject();
          });
      } catch (error) {
        console.log(error);
      }
    }),
  blockUser: (data) =>
    new Promise((resolve, reject) => {
      try {
        db.get()
          .collection(collection.CLIENT_COLLECTION)
          .updateOne(
            {
              _id: ObjectId(data),
            },
            {
              $set: {
                block: true,
              },
            }
          )
          .then(async () => {
            const details = await db
              .get()
              .collection(collection.CLIENT_COLLECTION)
              .find()
              .toArray();
            resolve(details);
          })
          .catch(() => {
            reject();
          });
      } catch (error) {
        console.log(error);
      }
    }),
  addPlan: (data) =>
    new Promise(async (resolve, reject) => {
      try {
        const d = data;
        d.remove = false;
        db.get()
          .collection(collection.PACKAGE_COLLECTION)
          .insertOne(d)
          .then((res) => {
            console.log(res);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      } catch (error) {
        console.log(error);
      }
    }),

  removePackage: (data) =>
    new Promise((resolve, reject) => {
      try {
        db.get()
          .collection(collection.PACKAGE_COLLECTION)
          .updateOne(
            {
              _id: ObjectId(data),
            },
            {
              $set: {
                remove: true,
              },
            }
          )
          .then(async () => {
            const details = await db
              .get()
              .collection(collection.PACKAGE_COLLECTION)
              .find({ remove: false })
              .toArray();
            resolve(details);
          })
          .catch(() => {
            reject();
          });
      } catch (error) {
        console.log(error);
      }
    }),
};
