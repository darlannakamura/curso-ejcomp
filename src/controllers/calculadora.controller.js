'use strict';

exports.subtracao = async(req, res, next) => {
    const { x , y } = req.body;
    res.status(200).send({
        result : x - y
    });
}


