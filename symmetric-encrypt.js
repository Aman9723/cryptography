/*
Encryption - taking a message and scrambling the bytes to create a cipher text. Cipher is randomized. 
In symmetric encryption both the sender and reciever must share a common key to encrypt and decrypt the data. 
*/

const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

/// Cipher

const message = 'i like turtles';
const key = randomBytes(32);
// initialization vector - prevents identical sequences of text
const iv = randomBytes(16);
const cipher = createCipheriv('aes256', key, iv);

/// Encryt

const encryptedMessage =
    cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');

/// Decrypt

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage =
    decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8');

console.log(`Encrypted:`, encryptedMessage);
console.log(`Decrypted:`, decryptedMessage);
