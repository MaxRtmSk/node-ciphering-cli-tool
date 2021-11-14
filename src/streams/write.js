

// const write = new Writable({
    
//     write(chuck, encoding, callback){
//         // const string = chuck.toString('hex')

//         if(chuck.includes('c')){
//             callback(Error('Thsis is an error'))
//         }
//         else
//         {
//             console.log(chuck);
//             fsWriteStream = fs.createWriteStream(path.join(__dirname, 'output.txt'), {
//                 flags: 'a',
//                 encoding: 'utf8'
//             });

//             fsWriteStream.write(chuck)

//             callback();
//         }
//     }

// })


// parse arg
// validateStdin()

// process.stdin.on('data', data => {
    
//     const text = data.toString();
    

// //     write.write(text, "utf8", () => {
// //         console.log("CS-Portal!");
// //    });

// fsWriteStream = fs.createWriteStream(path.join(__dirname, 'output.txt'), {
//     flags: 'a',
//     encoding: 'utf8'
// });

// fsWriteStream.write(text)

//     process.stdout.write(`You typed ${data.toString()}`);
    
//     process.exit();
// });


// ------------------------------------------------------------