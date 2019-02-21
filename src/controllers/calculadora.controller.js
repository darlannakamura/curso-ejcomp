'use strict';

exports.soma = async(req, res, next) => {
        var a = req.body.a;
        var b = req.body.b;

        res.send(a+b);
}

exports.multiplicacao = async(req, res, next) => {
	const a = req.body.a;
	const b = req.body.b;
	var x = a*b; 
	res.status(200).send({
		resultado: x
	});
}

exports.pow = async(req, res, next) => {
    res.send(req.body.a ^ req.body.b);
}
