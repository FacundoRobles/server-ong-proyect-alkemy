'use strict';

const { isEmpty } = require('lodash');
const { Entry } = require('../models/index');

module.exports.saveOne = async (params, object) => {
    if (isEmpty(params)) {
        return await Entry.create(object);
    }
    const { id } = params;
    const entry = await Entry.findOne({ where: { id , deleted: false} });
    if (!entry) {
        throw Error();
    }

    await Entry.update({ ...object, updateAt: new Date() }, { where: { id } });
    return object;
};

module.exports.find = async filters => {
    try {
        if (filters.where.id) {
            return await Entry.findOne({ ...filters });
        }

        return await Entry.findAll({ ...filters });
    } catch (err) {
        console.log({ success: false, data: err });
    }
};

module.exports.deleteOne = async ({ id }) => {
    try {
        const entry = await Entry.findByPk(id);
        if (entry) {
            await Entry.update(
                {
                    deletedAt: new Date(),
                    deleted: true,
                },
                { where: { id } }
                );
        }
        return entry;
    } catch (err) {
        console.log({ success: false, data: err });
    }
};
