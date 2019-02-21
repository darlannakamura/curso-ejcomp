'use strict';

exports.soma = async(req, res, next) => {
        var a = req.body.a;
        var b = req.body.b;

        res.send(a+b);
}
