const fs = require('fs');
const path = require('path');




// console.log('Start')

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         console.log(err)
//         return;
//     }

//     console.log('Папка создана')
// })


// console.log('End')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         console.log(err)
//         return
//     }

//     console.log('dir was deleted')
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'dbhdgdgh asfg s', (err) => {
//     if(err) {
//         console.log(err)
//         return
//     }

//     console.log('file was created')
// })

// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'new text string', (err) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log('text was appended')
// })

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
         
            return reject(err.message)
        }

        resolve()

    }))
}


const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
         
            return reject(err.message)
        }

        resolve()

    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
         
            return reject(err.message)
        }

        resolve(data)

    }))
}


const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
         
            return reject(err.message)
        }

        resolve()

    }))
}



removeFileAsync(path.resolve(__dirname, 'text.txt'))
    .then(() => console.log('file was removed'))



writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '123'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '456'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '7890'))
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data => console.log(data))
    .catch(err => console.log(err))



