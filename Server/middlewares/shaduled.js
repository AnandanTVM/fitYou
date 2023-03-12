const { CronJob } = require('cron');
const { SendOTP } = require('./SendEmail');

const job = new CronJob(
  '0 0 0 * * *',
  () => {
    console.log('every 12 AM');
  },
  null,
  true,
  'Asia/Kolkata'
);
module.exports = {
  job,
};
