const express = require('express');
const actions = require('./routes/ActionRouter');
const projects = require('./routes/ProjectRouter');
const cors = require('cors');
const server = express();
const port = 4500;

server.use(express.json());
server.use(cors());
server.use(logger);

server.use('/projects', projects);
server.use('/actions', actions);
// server.use('/:id/actions', actions);

server.get('/', (req, res) => {
	res.status(200).json({ message: 'Success' });
});

function logger(req, res, next) {
	console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);
	next();
}

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
