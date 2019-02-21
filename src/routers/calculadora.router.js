'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/calculadora.controller');

router.post('/soma', controller.soma);

module.exports = router;