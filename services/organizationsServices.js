'use strict';
const {isEmpty} = require('lodash')
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

module.exports.updateOrganizationService = async(idOrganization,name,image) => {
    return await Organization.findByPk(idOrganization)
    .then(async(organization) => {
        await Organization.update({
            name,
            image
        },{
            where:{
                id: idOrganization
            }
        })
        return organization
    })
}

module.exports.deletedOrganizationService = async (idOrganization) => {
    return await Organization.findByPk(idOrganization)
    .then(organization => {
        if(organization){
            organization.destroy()
            return organization
        }
        return organization
    })
}

module.exports.createOrganizationService = async(name,image,phone,address,welcomeText,socialNetworks) => {
    if(!isEmpty(name),!isEmpty(image)){
        return await Organization.findOrCreate({
            where: {
                name
            },
            defaults:{
                image,
                phone,
                address,
                welcomeText,
                socialNetworks
            }
        })
        .then(organization => organization)
    }
}