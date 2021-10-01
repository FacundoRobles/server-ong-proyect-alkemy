'use strict';

const { isEmpty } = require('lodash');
const { Entry } = require('../models/index');

module.exports.saveOne = async ({ id }, object) => {
    if (isEmpty(id)) {
        return await Entry.create(object);
    }
    const entry = await Entry.findOne({ where: { id, deleted: false } });
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
                where: { id, deleted: false, type },
            });
        }

        return await Entry.findAll({
            ...filters,
            where: { deleted: false, type },
        });
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
        entry.deleted = true;
        return entry;
    } catch (err) {
        console.log({ success: false, data: err });
    }
};
