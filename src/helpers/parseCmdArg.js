async function parseCmdArg(args) {
    const config_comd = args.indexOf('-c');
    const input_comd = args.indexOf('-i'); 
    const output_comd = args.indexOf('-o');

    if (config_comd === -1) throw new Error('Error: need config'); 

    let config = args[config_comd + 1];
    let input_path = input_comd !== -1 && args[input_comd + 1]; 
    let output_path = output_comd !== -1 && args[output_comd + 1];
        
    return { config, input_path, output_path }
};

module.exports = parseCmdArg;