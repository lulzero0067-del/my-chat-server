const WebSocket = require('ws');
const PORT = process.env.PORT || 3000;

const wss = new WebSocket.Server({ port: PORT });

console.log(`Server running on port ${PORT}`);

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (data) => {
    console.log(`Received: ${data}`);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
