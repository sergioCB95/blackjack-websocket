import 'core-js/stable';
import 'regenerator-runtime/runtime';
import express from 'express';
import http from 'http';
import socketIo from 'socket.io';

const app = express();
const server = http.Server(app);
const io = socketIo(server);

server.listen(8080, () => console.log('Server listening on http://localhost:8080'));

io.on('connection', (socket) => {
  console.log('Connection');

  socket.on('draw', (msg) => console.log('draw'));

  socket.on('surrender', (msg) => console.log('surrender'));

  socket.on('stay', (msg) => console.log('stay'));

  socket.on('double', (msg) => console.log('double'));

  socket.on('divide', (msg) => console.log('divide'));
});
