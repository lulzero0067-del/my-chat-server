const WebSocket = require('ws');
const PORT = process.env.PORT || 3000;

const wss = new WebSocket.Server({ port: PORT, host: '0.0.0.0' });

console.log(`Server running on port ${PORT}`);

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send('Hello from server!');

  ws.on('message', (data) => {
    console.log(`Received: ${data}`);
    ws.send(`You said: ${data}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
