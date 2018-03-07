const express = require('express');
const bodyParser = require('body-parser');

const knex = require('./database/db.js');

const server = express();

server.use(bodyParser.json());

server.get('/', function(req, res) {
    res.status(200).json({ api: 'All systems activated.' });
});

server.post('/users', (req, res) => {
    const user = req.body;

    knex.insert(user)
        .into('users')
        .then(function(ids) {
            res.status(201).json({ ids });
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'There was an error proccessing your request.' });
        });
});

server.get('/users', (req, res) => {
    const users = knex('users')
            .then(function(users) {
                res.status(200).json(users);
            })
            .catch(function() {
                res.status(500).json({ errorMessage: 'We could not find the user you entered. Was there a typo?'});
            })
});

const port = 3000;
server.listen(port, function() {
    console.log(`Server listening on ${port}`);
});
