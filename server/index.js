module.exports = () => {
  const app = require('express')();
  const http = require('http').Server(app);
  var io = require('socket.io')();

  io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

  http.listen('8080', () => {
    console.log('Starting Server on http://localhost:8080/');
  })
}
