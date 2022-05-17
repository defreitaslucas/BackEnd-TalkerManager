const fs = require('fs/promises');
// const crypto = require('crypto');

const readArq = async () => {
    const talker = await fs.readFile('talker.json', 'utf8');
    return JSON.parse(talker);
};

// const tokenGeneration = () => crypto.randomBytes(16).toString('hex');

const tokenGeneration = (length) => {
    // edit the token allowed characters
    const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
    const b = [];  
    for (let i = 0; i < length; i += 1) {
        const j = (Math.random() * (a.length - 1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join('');
};

module.exports = { readArq, tokenGeneration };