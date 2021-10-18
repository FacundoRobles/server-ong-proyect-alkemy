'use strict';

const { Organization } = require('../models/index');

module.exports.find = async (idOrganization) => {
    try {
        if (idOrganization) {
            return await Organization.findByPk(idOrganization)
        }
    } catch (err) {
        throw Error({ success: false, data: err });
    }
};

module.exports.getAll = async () => {
    try {
        return await Organization.findAll()
    } catch (err) {
        throw Error({ success: false, data: err });
    }
};