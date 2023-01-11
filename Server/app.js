const express = require('express');
const createError = require('http-errors');
const path = require('path');
const dotenv = require('dotenv');

const app = express();
const cors = require('cors');
// .env config

dotenv.config();
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
// data base connection
const db = require('./config/connection');

// for sever

app.use(express.static('../client/build'));

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routs
const homeRouter = require('./routs/home');
const clientRouter = require('./routs/client');
const adminRouter = require('./routs/admin');
const trainerRouter = require('./routs/trainer');

// redirects to roughts
app.use('/', homeRouter);
app.use('/admin', adminRouter);
app.use('/client', clientRouter);
app.use('/trainer/api', trainerRouter);

// for sever
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// data connection call
db.connect((err) => {
  if (err) console.log(`Connection error${err}`);
  else console.log('Datebase Connected to port 27017');
});
app.listen(3001, () => {
  console.log('sever started running on localhost:3001');
});
