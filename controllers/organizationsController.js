'use strict';

const { find, getAll } = require('../services/organizationsServices');

module.exports.fetchOrganization = async (req, res, next) => {
    const {idOrganization} = req.params
    try {
        const organization = (await find(idOrganization));
        if (organization) {
            const filters = {
                name: organization.dataValues.name,
                image: organization.dataValues.image,
                phone: organization.dataValues.phone,
                address: organization.dataValues.address,
                welcomText: organization.dataValues.welcomText,
                facebook: organization.dataValues.facebook,
                linkedin: organization.dataValues.linkedin,
                instagram: organization.dataValues.instagram
            }
            return res.status(200).json({
                success: true,
                data: filters
            });
        }
        return res.status(401).send({
            success: false,
            message: 'Organization not Found',
        });
    } catch (err) {
        next(err);
    }
};

module.exports.fetchAllOrganization = async (req, res, next) => {
    try {
        const organization = (await getAll());
        if (organization) {
            return res.status(200).json({
                success: true,
                data: organization
            });
        }
        return res.status(401).send({
            success: false,
            message: 'Organization not Found',
        });
    } catch (err) {
        next(err);
    }
};