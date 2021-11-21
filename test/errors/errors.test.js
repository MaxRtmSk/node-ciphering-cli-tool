const { spawn } = require('child_process');


describe('error', () => {
    test('right status exit', (cb) => {
        const argv = ['-c', 'C1-C1', '-o', 'file2.txt'];
        const cp = spawn( 'node', ['index.js', ...argv]);
    
        cp.on('exit', (errorCode)=> {
            expect(errorCode).toBe(1);
            cb();
        });
    });
    
    test('correct error message', (cb) => {
        const argv = ['-c', 'C1-C1', '-o', 'file2.txt'];
        const cp = spawn( 'node', ['index.js', ...argv]);
    
        cp.stderr.on('data', (data)=> {
            const errorMessage = data.toString().trim();
            expect(errorMessage).toBe("Error: no such file2.txt or directory!");
            cb();
        });
    });
})
 