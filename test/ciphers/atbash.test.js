const {atbash, isLowerCase, isUpperCase} = require('../../src/ciphers/atbash');

describe('ciphering letter to atbash', () => {
  test('set a', () => {
    const chipherLetter = atbash('a');
    expect(chipherLetter).toBe('z');
  });
  test('set z', () => {
    const chipherLetter = atbash('z');
    expect(chipherLetter).toBe('a');
  });
  test('set Text and symbols', () => {
    const chipherText = atbash('This is secret. Message about "_" symbol!');
    expect(chipherText).toBe('Gsrh rh hvxivg. Nvhhztv zylfg \"_\" hbnylo!');
  });
  
  describe('test helping function for Arbash cipher', () => {
    test('isLowerCase, set a', () => {
      expect(isLowerCase('a')).toBe(true);
    });
    test('isLowerCase, set A', () => {
      expect(isLowerCase('A')).toBe(false);
    });
    test('isUpperCase, set A', () => {
      expect(isUpperCase('A')).toBe(true);
    });
    test('isUpperCase, set a', () => {
      expect(isUpperCase('a')).toBe(false);
    });
  });
});