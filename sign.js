/*
Signing is used to validate that the data came from a trusted source. 
So private key is used to encrypt the data here and public key to decrypt it.
*/

const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'this data must be signed';

/// SIGN

const signer = createSign('rsa-sha256');
signer.update(message);
const signature = signer.sign(privateKey, 'hex');

/// VERIFY

const verifier = createVerify('rsa-sha256');
verifier.update(message);
const isVerified = verifier.verify(publicKey, signature, 'hex');

// if the signature was forged or message changed then the verifier will fail 
console.log(isVerified)