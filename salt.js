// Salt - a random value added to input before hashing.

const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

let users = [];

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64);

    // stored salt with hashed password
    const user = { email, password: `${salt}:${hashedPassword}` };
    users.push(user);
    return user;
}

function login(email, password) {
    const user = users.find((v) => v.email === email);

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    // prevents timing attack.
    // Timing attack is used to get the info by knowing the operation time.
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return 'login success!';
    } else {
        return 'login fail!';
    }
}
