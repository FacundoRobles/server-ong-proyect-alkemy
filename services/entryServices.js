'use strict';

const { Entry } = require('../models/index');

module.exports.saveOne = (params, object) => {
    return Entry.create(object);
};

module.exports.find = async filters => {
    try {
        if(filters.where.id) return await Entry.findOne({...filters})
        return await Entry.findAll({...filters});
    } catch (err) {
        console.log(err);
    }
};
