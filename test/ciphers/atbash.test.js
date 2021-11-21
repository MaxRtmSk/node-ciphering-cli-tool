const atbash = require('../../src/ciphers/atbash');

describe('ciphering letter to atbash', () => {
  test('set a', () => {
    const chipherLetter = atbash('a');
    expect(chipherLetter).toBe('z');
  });
  test('set z', () => {
    const chipherLetter = atbash('z');
    expect(chipherLetter).toBe('a');
  });
});