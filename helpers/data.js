const fs = require('fs/promises');

const readArq = async () => {
    const talker = await fs.readFile('talker.json', 'utf8');
    return JSON.parse(talker);
};

module.exports = { readArq };