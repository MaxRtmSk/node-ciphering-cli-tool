const convertConfig = require('../../src/helpers/convertConfig')

describe('helpers/convertConfig', () => {
    test('conver config, string to array', async() => {
        const resultConvertConfig = await convertConfig('C1-A');
        const isArray = Array.isArray(resultConvertConfig)
        expect(isArray).toStrictEqual(true);
  });
  
  test('conver config true value in array', async() => {
      const chipherLetter = await convertConfig('C1-R1-C0-C0-A-R0-R1-R1-A-C1');
      expect(chipherLetter).toStrictEqual(['C1', 'R1', 'C0', 'C0', 'A', 'R0', 'R1', 'R1', 'A', 'C1']);
  });
})
