import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port: 7500});

wss.on('error', console.error);

wss.on('connection', function open() {
  console.log("connection")
});

wss.on('message', function message(data) {
  console.log('received: %s', data);
});