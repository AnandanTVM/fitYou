const { CronJob } = require('cron');
const { planVidityCheck } = require('../helpers/CommenHelpers');
const { SendOTP } = require('./SendEmail');

const job = new CronJob(
  '0 0 0 * * *',
  // '*/60 * * * * *',
  () => {
    planVidityCheck()
      .then((res) => console.log(res.userdetails))
      .catch((err) => console.log(err));
    // console.log('every 12 A');
  },
  null,
  true,
  'Asia/Kolkata'
);
module.exports = {
  job,
};
