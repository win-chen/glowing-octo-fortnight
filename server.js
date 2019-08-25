const http = require('http');
const fs = require('fs');
const path = require('path');
const basePath = __dirname;
const express = require('express')

const HOST = '100.115.92.205';
const PORT = 1234;

const app = express()
app.use(express.static('public'))
app.use('/build', express.static('build'))

app.get('/', (req, res) => res.redirect('/index.html'));

app.listen(PORT, HOST, () => {
	console.log('Starting server@ ', 'http://' + HOST + ':' + PORT);
})
