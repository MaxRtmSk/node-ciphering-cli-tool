const parseCmdArg = require('../../src/helpers/parseCmdArg')

test('parseCmdArg', async() => {
    expect(await parseCmdArg(['-c', 'C1-C1', '-i', 'input.txt', '-o', 'output.txt'])).toStrictEqual({"config": "C1-C1", "input_path": 'input.txt', "output_path": "output.txt"});
  });