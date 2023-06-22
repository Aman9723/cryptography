// HMAC - hash based message authentication code. Hash which requires a key or password. JWT is the most used example.

const { createHmac } = require('crypto');

const key1 = 'super-secret!';
const message = 'boo 👻';

const key2 = 'other-password';

const hmac = (key, message) =>
    createHmac('sha256', key).update(message).digest('hex');

// different hash on key change
console.log(hmac(key1, message));
console.log(hmac(key2, message));
