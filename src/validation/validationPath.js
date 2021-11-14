const fs = require('fs');
const path = require('path');

async function validatePath(path) {
    if (!fs.existsSync(path)) throw new Error(`Error: no such ${path} or directory!`)
}

module.exports = validatePath;