const { Transform } = require('stream');
// const { caesarCipher } = require('../caesar-cipher');

// function transform(shift, action) {
  class CustomTransformStream extends Transform {
    constructor(opt) {
      super(opt);
    }

    _transform(chunk, encoding, callback) {
        //   const resultString = `${chunk.toString()}`;
        //   const resultFun = caesarCipher(resultString, shift, action);
        const chunkStringified = chunk.toString();
        const reversedChunk = chunkStringified.split('').reverse().join('');
        // this.push();
        callback(null, reversedChunk);
    }
  }
  const transform = new CustomTransformStream({ highWaterMark: 4 }, 'utf8');
// }





module.exports = transform;
