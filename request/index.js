// const express = require('express');

// let app = express();

// app.get('/', (req, res) => {
//     res.send('This is home')
// });

// app.get('/news', (req, res) => {
//     res.send('This is news')
// });

// app.get('/news/:id', (req, res) => {
//     res.send('ID is -:' + req.params.id)
// });

// app.listen(3000)

const http = require('http');
const url = require('url');
const {parse} = require('querystring')

http.createServer((req, res) => {
    // console.log(req.method)
    console.log(req.headers['user-agent'])
    if(req.method === "GET") {
        let urlRequest = url.parse(req.url, true)
    console.log(urlRequest.query)
    console.log(urlRequest.query.name)
    res.end('Working' )
    } else {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', () => {
            console.log(body)
            let params = parse(body)
            console.log(params)
            console.log(params.name)
            res.end('ok')
        })
    }

    
}).listen(5000, () => {
    console.log(`Server was started 5000...`)
})