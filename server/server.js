var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(3000, function(err){
  console.log("Collabration server running at http://localhost:3000")
});

var clients = {};

io.on('connection', function (socket) {
  
  socket.emit('hello', socket.id);

  socket.on('initiate', function(data){
    clients[socket.id] = data.client;
    console.log(socket.id + ' now connected with info ' + data.client.name);
  });

  socket.on('message', function(data){
    console.log(data);
    io.emit('broadcast',{user:clients[socket.id].name,msg:data});
  });

});