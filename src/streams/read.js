const fs = require('fs');
const path = require('path');

function read(input) {

//   if (input) {
//     stream = fs.createReadStream(path.join(__dirname, input), 'utf8');
//   } 

  return process.stdin;
};

module.exports = read;
