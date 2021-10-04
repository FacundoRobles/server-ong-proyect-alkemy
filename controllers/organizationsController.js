'use strict';

const { find } = require('../services/organizationsServices');

module.exports.fetchOrganization = async (req, res, next) => {
    try {
        const filters = {
            attributes: ['name', 'image', 'phone', 'address', 'welcomeText', 'facebook', 'linkedin', 'instagram']
        };
        
        const organization = (await find(req.params, filters));
        if (organization) {
            return res.status(200).json({
                success: true,
                data:  organization ,
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