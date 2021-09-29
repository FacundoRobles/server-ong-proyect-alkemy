'use strict';

const { saveOne, find } = require('../services/entryServices');

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

module.exports.fetchNews = async (req, res, next) => {
    try {
        let filters = {
            attributes: ['name', 'image', 'createdAt'],
            where: { type: 'news' },
        };

        if (req.params.id)
            filters = { where: { ...filters.where, id: req.params.id } };

        const entries = await find(filters);
        entries === null
            ? res.status(401).send('News not found')
            : res.status(200).send(entries);
    } catch (err) {
        next(err);
    }
};
