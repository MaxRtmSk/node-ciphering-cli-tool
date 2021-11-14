const{ Writable } = require('stream');
const { pipeline } = require('stream/promises');
const { createWriteStream } = require('fs');
const path = require('path');
const read = require('./src/streams/read');
const transform = require('./transform');
const transform1 = require('./transform1');
const validatePath = require('./src/validation/validationPath');
const validateCipherSteps = require('./src/validation/validationCipherSteps');


// const write = new Writable({
    
//     write(chuck, encoding, callback){
//         // const string = chuck.toString('hex')

//         if(chuck.includes('c')){
//             callback(Error('Thsis is an error'))
//         }
//         else
//         {
//             console.log(chuck);
//             fsWriteStream = fs.createWriteStream(path.join(__dirname, 'output.txt'), {
//                 flags: 'a',
//                 encoding: 'utf8'
//             });

//             fsWriteStream.write(chuck)

//             callback();
//         }
//     }

// })


// parse arg
// validateStdin()

// process.stdin.on('data', data => {
    
//     const text = data.toString();
    

// //     write.write(text, "utf8", () => {
// //         console.log("CS-Portal!");
// //    });

// fsWriteStream = fs.createWriteStream(path.join(__dirname, 'output.txt'), {
//     flags: 'a',
//     encoding: 'utf8'
// });

// fsWriteStream.write(text)

//     process.stdout.write(`You typed ${data.toString()}`);
    
//     process.exit();
// });


// ------------------------------------------------------------


async function parseArg(args) {
    try {
        const config_comd = args.indexOf('-c');
        const input_comd = args.indexOf('-i'); 
        const output_comd = args.indexOf('-o');

        if (config_comd === -1) throw new Error({message: 'Need config'}); 

        let config = args[config_comd + 1];
        let input_path = input_comd !== -1 && args[input_comd + 1]; 
        let output_path = output_comd !== -1 && args[output_comd + 1];
        
        return { config, input_path, output_path }
    } catch (error) {
        console.log(error)     
    };
};

async function converConfig(config) {
    const cipher_steps = config.split('-');
    await validateCipherSteps(cipher_steps);
    console.log(cipher_steps);
    return cipher_steps;
}

async function createStreams(cipher_steps, input_path, output_path) {
    const stream = {
        read: process.stdin,
        transforms: [],
        write: process.stdout
    }
    
    if (input_path) {
        await validatePath(input_path);
        stream.input = createWriteStream(input_path);
    };

    if (output_path) {
        await validatePath(output_path);
        stream.output = createWriteStream(output_path);
    };

    cipher_steps.array.forEach(element => {
        switch (ciphers) {
            case value:
                break;
            default:
                break;
        }     
    });

    return stream;
};

async function startPipeline({read, transforms, write}) {
    try {
        await pipeline(read, ...transforms ,write);
    } catch (error) {
        console.log(error);
    }; 
};


async function start() {
    const console_argv = process.argv.slice(2);
    const { config, input_path, output_path } = await parseArg(console_argv); 
    const cipher_steps = await converConfig(config);    
    const streams = await createStreams(cipher_steps, input_path, output_path)
    await startPipeline(streams);
};

start();