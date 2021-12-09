const fs = require('fs');
const path = require('path');


// fs.readFile(path.resolve(__dirname, 'text.txt'), (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'), {encoding: 'utf-8'})

// stream.on('data', (chunk) => {
//     console.log(chunk)
// })

// stream.on('end', () => console.log('reading finish'))
// stream.on('open', () => console.log('reading start'))

const WritableStream = fs.createWriteStream(path.resolve(__dirname, 'text2.txt'), {encoding: 'utf-8'})

for ( let i = 0 ; i < 20; i++) {
    WritableStream.write( i + '\n');
}
WritableStream.end()
