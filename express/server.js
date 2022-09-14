const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const axios = require("axios");
const cors = require("cors")
const encrypt = require("./encrypt");

const authUrl = "https://api-dev.tingg.africa/v1/oauth/token/request";
const authBody = {
    "client_id": "d88fc104-e736-4a54-8ca0-554843c882c8",
    "client_secret": "h0jBaQQdrZ9gc3nBESpJZav8bYzTe1l1CPRDQrw7",
    "grant_type": "client_credentials"
}
const authHeaders = {
    "Content-Type": "application/json",
    apiKey: "f02eTlHI1Rz2MkAiR64WgP05vVzctTd0",
}

const router = express.Router();

app.use(cors());

// sample payload object 
var payloadObj = {
	"merchant_transaction_id":"TXN10001",
	"customer_first_name":"Test",
	"customer_last_name":"User",
	"msisdn":123456,
	"customer_email":"testuser@gmail.com",
	"request_amount":10.0,
	"currency_code":"KSH",
	"account_number":"12345",
	"service_code":"DEMOSERVICE",
	"due_date":"2021-11-21 12:49:36",
	"request_description":"Test payment",
	"country_code":"KEN",
	"language_code":"EN",
	"payment_option_code":"Mpesa",
	"success_redirect_url":"http://abc.com/success",
	"fail_redirect_url":"http://abc.com/fail",
	"pending_redirect_url":"http://abc.com/pending",
	"callback_url":"http://abc.com/callback",
	"charge_beneficiaries":null
};

	const payloadStr = JSON.stringify(payloadObj);
// uncomment this for the raw api call.
// router.get('/', async (req, res) => {
//   try {
//     const response = await axios.post(authUrl, authBody, authHeaders);
//     return res.send({ response, authHeaders });
//   } catch (e) {
//     return res.send(e);
//   }
// });

// comment this if you uncomment the block above and vice versa
router.get('/', (req, res) => {
  const results = encrypt.encrypt(payloadStr)
  res.json({message: "this is the actual express result", results});

});

app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/123', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
