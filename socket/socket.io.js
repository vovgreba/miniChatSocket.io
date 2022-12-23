const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);



const onConnection = (socket) => {
  console.log(`user connection`)

  socket.on('messeges', (data) => {
    io.emit('messeges', { name: data.name, messege: data.messege});
  })

  socket.on('chat-room', (data) => {
    socket.join(data.room);
    io.to(data.room).emit('privat-room', { name: data.name, messege: data.messege})
  })



  socket.on('disconnect', (socket) => {
    console.log('user disconnect');
  })
}

module.exports = onConnection;