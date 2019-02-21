'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/calculadora.controller');


router.post('/soma', controller.soma);


// router.post('/', controller.soma);
router.post('/pow',controller.pow);

module.exports = router;