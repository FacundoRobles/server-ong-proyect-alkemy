'use strict';

const { Entry } = require('../models/index');

module.exports.saveOne = (params, object ) => {
        return Entry.create(object);
}