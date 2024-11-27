// server.js
const WebSocket = require('ws');
const http = require('http');

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Serveur en marche');
});

// Créer un serveur WebSocket
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Un joueur est connecté');
  
  // Quand le serveur reçoit un message d'un client
  ws.on('message', (message) => {
    console.log(`Message reçu : ${message}`);
    
    // Vous pouvez ici manipuler les messages, par exemple, gérer le jeu en fonction des actions des joueurs
  });

  // Envoyer un message au client lors de la connexion
  ws.send('Bienvenue dans le jeu !');
});

// Démarrer le serveur sur le port 8080
server.listen(8080, () => {
  console.log('Serveur démarré sur http://localhost:8080');
});
