const http = require('http')
const PORT = 8000;
const greeting = require('./greeting');
const User = require('./user')

// http.createServer((req, res) => {
//     res.end(
//     )

// }).listen(PORT, () => {
//     console.log(`server was started on ${PORT} PORT....`)
//     console.log(`Date of require: ${greeting.date}`)
//         console.log(greeting.getMessage('drus'))
// })

// let Drus = new User('Drus', 23)
// Drus.sayHi()

console.log(__dirname)
console.log(__filename)
