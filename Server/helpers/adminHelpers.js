const db = require('../config/connection');
const collection = require('../config/collection');
// const { ObjectId, Db } = require('mongodb')
// const { response, json } = require('express')

module.exports = {
  doadminLogin: (userData) =>
    new Promise(async (resolve) => {
      const response = {};
      const user = await db
        .get()
        .collection(collection.ADMIN_COLLECTION)
        .findOne({ phone: userData.Phone });
      console.log(user);
      if (user) {
        response.user = user;
        response.status = true;
        resolve(response);
      } else {
        resolve({ status: false });
      }
    }),
};
