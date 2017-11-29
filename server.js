let WebSocketServer = require('ws').Server;

let wss = new WebSocketServer({port: 1984});

let messages = [];
wss.on('connection', function (ws) {
  messages.forEach(function(message){
    ws.send(message);
  });
  ws.on('message', function (message) {
    messages.push(message);
    wss.clients.forEach(function (conn) {
      conn.send(message);
    });
  });
});
