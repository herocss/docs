const express = require('express');
const path = require('path');
const compression = require('compression');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
console.info('env: ' + app.get('env'));

app.get('/static/*', compression(), function (req, res, next) {
    res.setHeader('Cache-Control', 'public, max-age=600');
    res.setHeader('Expires', new Date(Date.now() + 600000).toUTCString());
    next();
});

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', function (req, res) {
    res.sendFile('index.html', { 'root': path.join(__dirname, '../dist/') });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
