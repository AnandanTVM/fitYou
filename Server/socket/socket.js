let users = [];
const addUser = (userId, socketId) => {
  // eslint-disable-next-line no-unused-expressions
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};
const removeUser = (sockedId) => {
  // const details = users.find((user) => user.socketId === sockedId);

  users = users.filter((user) => user.socketId !== sockedId);
};
const getUser = (userId) => users.find((user) => user.userId === userId);

module.exports = {
  sockets: (socket) => {
    // when connect
    console.log('connected to sockect io');

    // take userId and sockectId from user
    socket.on('addUser', (userId) => {
      addUser(userId, socket.id);
      socket.emit('getUsers', users);
    });

    // send and get message
    socket.on('sendMessage', ({ senderId, receverId, text }) => {
      const user = getUser(receverId);
      if (user) {
        socket.to(user.socketId).emit('getMessage', {
          senderId,
          text,
        });
      }
    });

    // when disconnect
    socket.on('disconnect', () => {
      console.log('a user disconnected!');
      removeUser(socket.id);
      socket.emit('getUsers', users);
    });
  },
};
