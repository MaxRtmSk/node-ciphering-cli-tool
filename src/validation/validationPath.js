const fs = require('fs');
// const { errors } = require('./error/errors');

async function validatePath(path) {
    if (!fs.existsSync(path)) {
      // errors(Error('Error: no such file or directory!'));
        console.error('111111111111111111111 path file')
    }   
}

module.exports = validatePath;