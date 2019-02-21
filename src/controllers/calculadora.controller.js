'use strict';

exports.soma = async(req, res, next) => {
        
}


exports.multiplicacao = async(req, res, next) => {
	const a = req.body.a;
	const b = req.body.b;
	var x = a*b; 
	res.status(200).send({
		resultado: x
	});
}
