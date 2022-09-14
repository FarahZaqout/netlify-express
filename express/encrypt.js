let checkoutEncrypt = require('@cellulant/checkout_encryption');

const accessKey = "$2a$08$w2CRJZEB7MTrHVsdfm6uuu.lyrCHqsQLG4L66fV.nzxay/o99zMZm"
const IVKey = "<f2GK7VwTzWCtXjHp>";
const secretKey = "<FmWYbqfvB7z2HLdV>";
const algorithm = "aes-256-cbc";


 
  // Create object of the Encryption class  
  let encryption = new checkoutEncrypt.Encryption(IVKey, secretKey, algorithm);

  module.exports = encryption;
 // call encrypt method
//  var result = encryption.encrypt(payloadStr);

 // print the result
//  console.log(result);