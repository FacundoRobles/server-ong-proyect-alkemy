'use strict';

const { get } = require('lodash');
const { saveOne, find, deleteOne } = require('../services/entryServices');

module.exports.saveOne = async (req, res, next) => {
    try {
        req.body.type = 'news';
        await saveOne(req.params, req.body)
            .then(val =>
                res.status(200).send({
                    success: true,
                    data: val,
                })
            )
            .catch(err =>
                res.send({
                    success: false,
                    message: get(
                        err,
                        'errors[0].message',
                        'Could not update that news'
                    ),
                })
            );
    } catch (err) {
        next(err);
    }
};

module.exports.fetchNews = async (req, res, next) => {
    try {
        let filters = {
            attributes: ['name', 'image', 'createdAt']
        };

        const entries = await find(req.params, filters, 'news');
        if (entries) {
            return res.status(200).send({
                success: true,
                data: entries,
            });
        }
        return res.status(401).send({
            success: false,
            message: 'News not Found',
        });
    } catch (err) {
        next(err);
    }
};

module.exports.deleteOne = async (req, res, next) => {
    try {
        let filters = {
            attributes: ['name', 'image', 'createdAt']
        };
        const entryToDelete = await find(req.params, filters, 'news');
        const result = await deleteOne(entryToDelete);
        if (result) {
            return res.status(200).send({
                success: true,
                data: result,
            });
        }
        return res.status(401).send({
            success: false,
            message: 'News not Found',
        });
    } catch (err) {
        next(err);
    }
};
