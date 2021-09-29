'use strict';

const { Entry } = require('../models/index');

module.exports.saveOne = (params, object) => {
    return Entry.create(object);
};

module.exports.findAll = async filters => {
    try {
        return await Entry.findAll({...filters});
    } catch (err) {
        console.log(err);
    }
};
