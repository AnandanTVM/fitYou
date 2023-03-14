const { CronJob } = require('cron');
const { planVidityCheck } = require('../helpers/CommenHelpers');
const { SendOTP } = require('./SendEmail');

const job = new CronJob(
  '0 0 0 * * *',
  // '*/20 * * * * *',
  () => {
    planVidityCheck()
      .then(() => console.log('task done'))
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
