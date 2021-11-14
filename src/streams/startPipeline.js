const { pipeline } = require('stream/promises');

async function startPipeline({read, transforms, write}) {
    try {
        await pipeline(read, ...transforms ,write);
    } catch (error) {
        throw new Error('Error: Oops something broke in stream')
    }; 
};

module.exports = startPipeline;