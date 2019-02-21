'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/calculadora.controller');

router.post('/subtracao', controller.subtracao);

module.exports = router;