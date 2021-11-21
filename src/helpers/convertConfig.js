const validateCipherSteps = require('../validation/validationCipherSteps');

async function convertConfig(config) {
    const cipher_steps = config.split('-');
    await validateCipherSteps(cipher_steps);
    return cipher_steps;
};

module.exports = convertConfig;