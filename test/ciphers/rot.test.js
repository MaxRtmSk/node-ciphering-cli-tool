const { rot } = require('../../src/ciphers/rot');

describe('ciphering letter to rot', () => {
    describe('ciphering to ROT8', () => {
        test('set A and decode', () => {
          const chipherLetter = rot('A', 8, '1');
          expect(chipherLetter).toBe('I');
        });
        test('set K and encode', () => {
            const chipherLetter = rot('I', 8, '0');
            expect(chipherLetter).toBe('A');
        });
        test('set Text and symbols, decode', () => {
            const chipherText = rot('This is secret. Message about "_" symbol!', 8, '1');
            expect(chipherText).toBe('Bpqa qa amkzmb. Umaaiom ijwcb \"_\" agujwt!');
          });
      });
      describe('ciphering to Caesar', () => {
        test('set A and decode', () => {
          const chipherLetter = rot('A', 1, '1');
          expect(chipherLetter).toBe('B');
        });
        test('set B, encode', () => {
          const chipherLetter = rot('B', 1, '0');
          expect(chipherLetter).toBe('A');
        });
        test('set Text and symbols, decode', () => {
            const chipherText = rot('This is secret. Message about "_" symbol!', 1, '1');
            expect(chipherText).toBe('Uijt jt tfdsfu. Nfttbhf bcpvu \"_\" tzncpm!');
          });
      });
  });