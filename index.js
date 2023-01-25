// import express
const express = require('express')
require('dotenv').config();

const port = process.env.PORT || 3001;
// import cors
const cors = require('cors')
 
const bodyParser = require('body-parser');
 
// import routes
const Router =require("./routes/routes.js");
  
// init express
const app = express();

const wss = new WebSocket.Server({ noServer: true });

server.on('upgrade', function (request, socket, head) {
  wss.handleUpgrade(request, socket, head, function (ws) {
     wss.emit('connection', ws, request);
  })
})
  
// use express json
app.use(express.json());
  
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// use router
app.use(Router);
  
app.listen(port, () => console.log('Server running'));

