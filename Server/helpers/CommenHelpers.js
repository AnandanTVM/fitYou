const { ObjectId } = require('mongodb');
const nodemailer = require('nodemailer');
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
  sendOTPVerificationEmail: (email) => {
    try {
      const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
          user: 'anandan1999n@gmail.com',
          pass: process.env.AUTH_EMAIL_TEST_PAS,
        },
        tls: { rejectUnauthorized: false },
      });

      const mailOptions = {
        from: 'anandan1999n@gmail.com',
        to: 'anandan2016@gmail.com',
        subject: 'Hello world this is a test',
        text: 'this is a test',
        html: `<p> Your 4 digit One Time Password is <b>${otp} </b></p>.<p>This code <b> expires in 1 houre</b>.</p> `,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('here');
          console.log(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      });
      // const mailOptions = {
      //   from: process.env.AUTH_EMAIL,
      //   to: email,
      //   html: `<p> Your 4 digit One Time Password is <b>${otp} </b></p>.<p>This code <b> expires in 1 houre</b>.</p> `,
      // };
    } catch (error) {
      console.log('email not sent!');
      console.log(error);
    }
  },
};
