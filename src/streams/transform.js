const { Transform } = require('stream');
const { rot } = require('../ciphers/rot')

  class Rot8Cipher extends Transform {
    constructor(action) {
      super();
      this.action = action;
    }

    _transform(chunk, encoding, callback) {
        const chunkStringified = chunk.toString().trim('');
        const chipherChunk = rot(chunkStringified, 8, this.action);
        callback(null, `${chipherChunk}\n`);
    }
  }

  class CaesarCipher extends Transform {
    constructor(action) {
      super();
      this.action = action;
    }

    _transform(chunk, encoding, callback) {
        const chunkStringified = chunk.toString().trim('');
        const chipherChunk = rot(chunkStringified, 1, this.action);
        callback(null, `${chipherChunk}\n`);
    }
  }

  // class AtbashCipher extends Transform {
  //   constructor() {
  //     super();
  //   }

  //   _transform(chunk, encoding, callback) {
  //       const chunkStringified = chunk.toString().trim('');
  //       const reversedChunk = chunkStringified.split('').reverse().join('')
  //       callback(null, `${reversedChunk}\n`);
  //   }
  // }
  
  
  // const transform = CustomTransformStream({ highWaterMark: 4 }, 'utf8');


module.exports = { Rot8Cipher, CaesarCipher};
