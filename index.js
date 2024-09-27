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


const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let messages = [];

// Route to get all messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

// Route to post a new message
app.post('/messages', (req, res) => {
    let message = req.body.message;
    console.log(message);
    messages.push(message);
    res.send('POST messages');
});

// Route to get a message by its numeric index (id)
app.get('/messages/id/:id', (req, res) => {
    let id = parseInt(req.params.id, 10); // Ensure id is an integer
    if (id >= 0 && id < messages.length) {
        res.json(messages[id]);
    } else {
        res.status(404).send('Message not found');
    }
});

// Route to get a message by its content (assuming name refers to message content)
app.get('/messages/name/:name', (req, res) => {
    let name = req.params.name;
    let foundMessages = messages.filter(msg => msg === name);
    if (foundMessages.length > 0) {
        res.json(foundMessages);
    } else {
        res.status(404).send('Message not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

