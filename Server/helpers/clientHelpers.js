const bcrypt = require('bcrypt');
const db = require('../config/connection');
const collection = require('../config/collection');
// const { ObjectId, Db } = require('mongodb')
// const { response, json } = require('express')

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
};
