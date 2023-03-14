const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_EMAIL_TEST_PAS,
  },
  tls: { rejectUnauthorized: false },
});
module.exports = {
  SendOTP: (otp, tomail, name) =>
    new Promise((resolve, reject) => {
      try {
        const mailOptions = {
          from: process.env.AUTH_EMAIL,
          to: tomail,
          subject: 'fitYou login alert -OTP',
          html: `<h2>Dear ${name} ,<h2/>  <p><h3>Greetings from fitYou</h3> </p><h4><p>
                 Your 4 digit One Time Password is<h2> <b>${otp} </b></h2>.This code <b> expires in 1 houre</b>.. Never share this OTP with anyone. 
                 For any assistance, please contact www.fityou.life</p> </h4>`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log('here');
            console.log(error);
            reject(error);
          } else {
            console.log(`Email sent: ${info.response}`);
            resolve(info.response);
          }
        });
      } catch (error) {
        reject(error);
      }
    }),
  SendPackagePlasedMessage: (tomail, name) =>
    new Promise((resolve, reject) => {
      try {
        const mailOptions = {
          from: process.env.AUTH_EMAIL,
          to: tomail,
          subject: 'fitYou Package Placed',
          html: `<h2>Dear ${name} ,<h2/> 
           <p><h3>Greetings from fitYou</h3> 
          <p>We are pleased to inform you that your plan has been successfully placed.</p>
          <p>Thank you for choosing us. We hope that you have a great experience with our service.For More vist www.fityou.life</p>
          
          <p>Sincerely,</p>
          <p>The customer Team</p>`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info.response);
          }
        });
      } catch (error) {
        reject(error);
      }
    }),
  SendPlanExpiryMessage: (tomail, name, planName, expiryDate) =>
    new Promise((resolve, reject) => {
      try {
        const mailOptions = {
          from: process.env.AUTH_EMAIL,
          to: tomail,
          subject: `fitYou ${planName} Plan Expiry`,
          html: `<h2>Dear ${name},</h2> 
           <p><h3>Greetings from fitYou</h3> 
          <p>We would like to remind you that your ${planName} plan is expiring on ${expiryDate}.</p>
          <p>Please renew your plan to continue enjoying our services. For more information, visit www.fityou.life</p>
          
          <p>Sincerely,</p>
          <p>The Customer Team</p>`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info.response);
          }
        });
      } catch (error) {
        reject(error);
      }
    }),
};
