'use strict';

const { saveOne } = require('../services/entryServices');

module.exports.saveOne = async (req, res, next) => {
    try {
        req.body.type = 'news';
        return await saveOne(req.params, req.body)
            .then(_ => res.status(200).send('Succesfully Created'))
            .catch(err => res.send(err.errors[0].message));
    } catch (err) {
        next(err);
    }
};
