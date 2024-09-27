// const {createServer} = require ('http');

// const chalk = require("chalk");



// const server = createServer((req, res) => {

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   console.log(chalk.green('hey\n'));
//   res.end('Hello World!\n');
// });
// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('GET messages!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})