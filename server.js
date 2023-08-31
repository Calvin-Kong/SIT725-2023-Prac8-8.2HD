var express = require("express");
var app = express();
var port = process.env.port || 3000;
require('./Database');
let router = require('./routers/route');
const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + "/"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/dog', router);

io.on('connection', (socket) => {
  console.log('Establishing connection....');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  setInterval( () => {
    socket.emit('number', parseInt(Math.random()*20));
  }, 2000)
});

http.listen(port, () => {
  console.log("Server started");
});
