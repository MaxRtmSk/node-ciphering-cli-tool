const { createWriteStream } = require('fs')
const validatePath = require('../validation/validationPath');
const { Rot8Cipher, CaesarCipher } = require('./transform');


async function createStreams(cipher_steps, input_path, output_path) {
    const stream = {
        read: process.stdin,
        transforms: [],
        write: process.stdout
    }
    
    if (input_path) {
        await validatePath(input_path);
        stream.read = createWriteStream(input_path);
    };

    if (output_path) {
        await validatePath(output_path);
        stream.write = createWriteStream(output_path);
    };

    cipher_steps.forEach(step => {
        switch (step[0]) {
            case 'C':
                console.log('C')
                const caesarCipher = new CaesarCipher(step[1]);
                stream.transforms.push(caesarCipher);
                break;
            case 'R':
                console.log('R');
                const rot8Cipher = new Rot8Cipher(step[1]);
                stream.transforms.push(rot8Cipher);
                break;
            case 'A':
                console.log('A');
                break;
            default:
                break;
        }     
    });

    return stream;
};

module.exports = createStreams;