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
app.use(express.static(path.join(__dirname, '../client/build/')));

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routs
const homeRouter = require('./routs/home');
const clientRouter = require('./routs/client');
const adminRouter = require('./routs/admin');
const trainerRouter = require('./routs/trainer');
const { Socket } = require('socket.io');

// redirects to roughts
app.use('/', homeRouter);
app.use('/api/admin', adminRouter);
app.use('/api/client', clientRouter);
app.use('/api/trainer', trainerRouter);

// for sever

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
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
const server = app.listen(3001, () => {
  console.log('sever started running on localhost:3001');
});

// eslint-disable-next-line import/order
const io = require('socket.io')(server, {
  pingTimeout: 60000,
  cors: {
    origin: 'http://localhost:3000',
  },
});

let users = [];
const addUser = (userId, socketId) => {
  // eslint-disable-next-line no-unused-expressions
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};
const removeUser = (sockedId) => {
  users = users.filter((user) => user.socketId !== sockedId);
};
const getUser = (userId) => users.find((user) => user.userId === userId);
io.on('connection', (socket) => {
  // when connect
  console.log('connected to sockect io');

  // take userId and sockectId from user
  socket.on('addUser', (userId) => {
    addUser(userId, socket.id);
    io.emit('getUsers', users);
  });
  // send and get message
  socket.on('sendMessage', ({ senderId, receverId, text }) => {
    console.log(text);
    const user = getUser(receverId);
    io.to(user.socketId).emit('getMessage', {
      senderId,
      text,
    });
  });
  // when disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected!');
    removeUser(socket.id);
    io.emit('getUsers', users);
  });
});
