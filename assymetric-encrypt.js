/*
Assymetric Encryption is used in HTTPS
The browser finds a public key of an ssl certificate installed on the website
This public key is used to encrypt any data that you send to a website.
The data is then decrypted by the website.
*/

const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'the british are coming!';

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

console.log(encryptedData.toString('hex'));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(decryptedData.toString('utf-8'));
