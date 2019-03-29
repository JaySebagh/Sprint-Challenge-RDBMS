const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Beep Boop, server alive.')
})

module.exports = server;