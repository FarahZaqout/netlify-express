const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const axios = require("axios");
const cors = require("cors")

const authUrl = "https://api-dev.tingg.africa/v1/oauth/token/request";
const authBody = {
    "client_id": "JOHNDOESERVICE123",
    "client_secret": "BLXBeUyndtTTASXwTFZbgdDVKWeQnFUEHbXj",
    "grant_type": "client_credentials"
}
const authHeaders = {
    "Content-Type": "application/json",
    apiKey: "f02eTlHI1Rz2MkAiR64WgP05vVzctTd0",
}

const router = express.Router();

app.use(cors());
router.get('/', async (req, res) => {
  try {
    const response = await axios.post(authUrl, authBody, authHeaders);
    return res.send({ response, authHeaders });
  } catch (e) {
    return res.send(e);
  }

  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write('<h1>Hello from Express.js!</h1>');
  // res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
