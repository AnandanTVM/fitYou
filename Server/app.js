const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());
// data base connection
const db = require('./config/connection');

app.use(express.json());

// routs
const homeRouter = require('./routs/home');

// redirects to roughts
app.use('/', homeRouter);

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
