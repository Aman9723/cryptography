/*
Hashing - creates a garbage looking output of fixed length for an input. It is fast to compute and unique. Can't be reversed. Provides same output for same input. Precomputed hashes can be used to try out brute force attack.
*/
const { createHash } = require('crypto');

// Create a string hash
function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

// Compare to hash passwords
let password = 'hi-mom!';
const hash1 = hash(password);
console.log(hash1);

password = 'hi-mom';
const hash2 = hash(password);
const match = hash1 === hash2;
console.log(match ? '✅' : '❌');
