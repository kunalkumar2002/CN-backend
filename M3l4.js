const http = require('http');

const server = http.createServer((req, res) => {
    res.end("welcome to nodejs");
})

server.listen(3100, () => {
    console.log('server is listening')
})