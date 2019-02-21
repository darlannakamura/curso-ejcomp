'use strict';

exports.soma = async(req, res, next) => {
        
}

exports.pow = async(req, res, next) => {
    res.send(req.body.a ^ req.body.b);
}