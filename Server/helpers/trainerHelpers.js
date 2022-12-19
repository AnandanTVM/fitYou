const bcrypt = require('bcrypt');
const db = require('../config/connection');
const collection = require('../config/collection');
// const { ObjectId, Db } = require('mongodb')
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
            status: 'Active PT',
          });
        console.log(user);
        if (user !== 'null') {
          bcrypt.compare(data.password, user.password).then((status) => {
            if (status) {
              response.trainer = user;
              response.status = true;
              resolve(response);
            } else {
              resolve({ status: false });
            }
          });
        } else {
          console.log("error");
          resolve({ status: false });
        }
      } catch (error) {
        console.log(error);
      }
    }),
};
