'use strict';

const { isEmpty } = require('lodash');
const { Entry } = require('../models/index');

module.exports.saveOne = async ({ id }, object) => {
    if (isEmpty(id)) {
        return await Entry.create(object);
    }
    const entry = await Entry.findOne({ where: { id } });
    if (!entry) {
        throw Error();
    }

    await Entry.update({ ...object, updateAt: new Date() }, { where: { id } });
    return object;
};

module.exports.find = async ({ id }, filters, type) => {
    try {
        if (id) {
            return await Entry.findOne({
                where: { id, type },
            });
        }

        return await Entry.findAll({
            ...filters,
            where: { type },
        });
    } catch (err) {
        throw Error({ success: false, data: err });
    }
};

module.exports.deleteOne = async (entryToDelete) => {
    try {
        return await entryToDelete.destroy();
    } catch (err) {
        throw Error({ success: false, data: err });
    }
};
