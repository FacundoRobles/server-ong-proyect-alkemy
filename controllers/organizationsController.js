'use strict';
const { find, getAll, updateOrganizationService, deletedOrganizationService, createOrganizationService } = require('../services/organizationsServices');

module.exports.fetchOrganization = async (req, res, next) => {
    const {idOrganization} = req.params
    try {
        const organization = (await find(idOrganization))
        
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
        console.log("ERROR", JSON.stringify(err))
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
    const {welcomeText, items} = req.body;

    try {
        const organization = (await updateOrganizationService(idOrganization, welcomeText, items));
        if (organization) {
            const updated = (await find(idOrganization))
            return res.status(200).json({
                success: true,
                data: updated
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