const { ReadStream } = require('./readable');
const { WriteStream } = require('./wtitable');
const validatePath = require('../validation/validationPath');
const { Rot8Cipher, CaesarCipher, AtbashCipher } = require('./transform');


async function createStreams(cipher_steps, input_path, output_path) {
    const stream = {
        read: process.stdin,
        transforms: [],
        write: process.stdout
    }
    
    if (input_path) {
        await validatePath(input_path);
        readable = new ReadStream(input_path);
        stream.read = readable;
    };

    if (output_path) {
        await validatePath(output_path);
        const writable = new WriteStream(output_path);
        stream.write = writable;
    };

    cipher_steps.forEach(step => {
        switch (step[0]) {
            case 'C':
                const caesarCipher = new CaesarCipher(step[1]);
                stream.transforms.push(caesarCipher);
                break;
            case 'R':
                const rot8Cipher = new Rot8Cipher(step[1]);
                stream.transforms.push(rot8Cipher);
                break;
            case 'A':
                const atbashCipher = new AtbashCipher();
                stream.transforms.push(atbashCipher); 
                break;
            default:
                break;
        }     
    });

    return stream;
};

module.exports = createStreams;