/* eslint-disable no-unused-vars */
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const app = express();
const cors = require('cors');
const { CronJob } = require('cron');
const { sockets } = require('./socket/socket');
const db = require('./config/connection');
const { errorHandler } = require('./middlewares/errorMiddleware');
// .env config
dotenv.config();
const corsOptions = {
  origin: process.env.FROUND_END_PORT,
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// for sever
app.use(express.static(path.join(__dirname, '../client/build/')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routs
const homeRouter = require('./routs/home');
const clientRouter = require('./routs/client');
const adminRouter = require('./routs/admin');
const trainerRouter = require('./routs/trainer');
const { job } = require('./middlewares/shaduled');

// redirects to roughts
app.use('/', homeRouter);
app.use('/api/admin', adminRouter);
app.use('/api/client', clientRouter);
app.use('/api/trainer', trainerRouter);

// for sever
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(errorHandler);

// data connection call
db.connect((err) => {
  if (err) console.log(`Connection error${err}`);
  else console.log('Datebase Connected to port 27017');
});

const server = app.listen(process.env.PORT, () => {
  console.log('sever started running on localhost:3001');
});
// eslint-disable-next-line import/order
const io = require('socket.io')(server, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.FROUND_END_PORT,
  },
});

io.on('connection', sockets);
