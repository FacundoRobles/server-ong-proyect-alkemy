'use strict';

const { Organization } = require('../models/index');

module.exports.find = async ({ id }, filters) => {
    try {
        if (id) {
            return await Organization.findOne({...filters,
                where: { id, deleted: false },
            });
        }

        return await Organization.findAll({...filters, where: { deleted: false } });
    } catch (err) {
        throw Error({ success: false, data: err });
    }
};
