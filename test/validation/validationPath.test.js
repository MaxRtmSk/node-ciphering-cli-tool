const validatePath = require('../../src/validation/validationPath')

describe('validation file path', () => {
    test('file must exist', async () => {
        expect(await validatePath('input.txt')).toBe()
    });
    test('file does not exist', async () => {
        const path = 'input1.txt'
        const error = new Error(`Error: no such ${path} or directory!`);
        try {
            await validatePath(path)
        } catch (e) {
            expect(e).toStrictEqual(error);
        }
    });
})
