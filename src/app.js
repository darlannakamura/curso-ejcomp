'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const indexRouter = require('./routers/index.router');
const calculadoraRouter = require('./routers/calculadora.router');


app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRouter);
app.use('/calculadora', calculadoraRouter);

module.exports = app;