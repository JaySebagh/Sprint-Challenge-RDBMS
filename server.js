const express = require('express');
const server = express();
const projectRouter = require('./routers/project-router.js')
const actionRouter = require('./routers/action-router.js')

server.use(express.json());
server.use('/project', projectRouter)
server.use('/action', actionRouter)

server.get('/', (req, res) => {
    res.send('Beep Boop, server alive.')
})

module.exports = server;