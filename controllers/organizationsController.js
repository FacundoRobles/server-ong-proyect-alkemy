'use strict';
const { find, getAll, updateOrganizationService, deletedOrganizationService, createOrganizationService } = require('../services/organizationsServices');

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
                socialNetworks: {
                    facebook: organization.dataValues.facebook,
                    linkedin: organization.dataValues.linkedin,
                    instagram: organization.dataValues.instagram
                }
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

module.exports.updateOrganizationController = async (req, res, next) => {
    const {idOrganization} = req.params;
    const {name,image} = req.body;
    try {
        const organization = (await updateOrganizationService(idOrganization,name,image));
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

module.exports.deletedOrganizationController = async (req, res, next) => {
    const {idOrganization} = req.params;
    try {
        const organization = (await deletedOrganizationService(idOrganization));
        if (organization) {
            return res.status(200).json({
                success: true,
                data: 'organization deleted successfully'
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

module.exports.createOrganizationController = async (req, res, next) => {
    const {name,image,phone,address,welcomeText,socialNetworks} = req.body;
    try {
        const organization = (await createOrganizationService(name,image,phone,address,welcomeText,socialNetworks));
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