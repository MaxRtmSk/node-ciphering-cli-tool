const errors = require('./src/errors');
const convertConfig = require('./src/helpers/convertConfig');
const parseCmdArg = require('./src/helpers/parseCmdArg');
const createStreams = require('./src/streams/createStreams');
const startPipeline = require('./src/streams/startPipeline');


async function start() {
    try {
        const console_argv = process.argv.slice(2);
        const { config, input_path, output_path } = await parseCmdArg(console_argv); 
        const cipher_steps = await convertConfig(config);    
        const streams = await createStreams(cipher_steps, input_path, output_path)
        await startPipeline(streams);    
    } catch (error) {
        errors(error);   
    }
};

start();