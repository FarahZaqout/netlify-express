const axios = require("axios");

let accessToken = "";
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

axios.post(authUrl, authBody, authHeaders)
    .then(res => console.log(res.status, res.statusText, res.data))
    .catch(err => console.log(err.response.status, err.response.statusText, err.response.data));


const body = {
    "msisdn": 254700000000,
    "account_number": "ACCNO02561",
    "callback_url": "https://jsonplaceholder.typicode.com/todos/1",
    "country_code": "KEN",
    "currency_code": "KES",
    "customer_email": "johndoe@gmail.com",
    "customer_first_name": "John",
    "customer_last_name": "Doe",
    "due_date": "2021-11-05 20:00:00",
    "fail_redirect_url": "https://jsonplaceholder.typicode.com/todos/1",
    "invoice_number": "1234",
    "merchant_transaction_id": "787867001614",
    "raise_invoice": false,
    "request_amount": 100,
    "request_description": "Bag",
    "service_code": "JOHNDOEONLINESERVICE",
    "success_redirect_url": "https://jsonplaceholder.typicode.com/todos/1",
}


const checkoutUrl = "https://api-dev.tingg.africa/v3/checkout-api/checkout/request";

const checkoutHeader = {
    "Content-Type": "application/json",
    apiKey: "f02eTlHI1Rz2MkAiR64WgP05vVzctTd0",
    Authorization: `bearer ${accessToken}`,
}
// axios.post(checkoutUrl, body, authHeaders)
//     .then(res => console.log(res.status, res.statusText, res.data))
//     .catch(err => console.log(err.response.status, err.response.statusText, err.response.data));