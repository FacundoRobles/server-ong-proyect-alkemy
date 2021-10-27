'use strict';
const {isEmpty, forEach} = require('lodash')
const { Organization, Slide } = require('../models/index');

module.exports.find = async (idOrganization) => {
    try {
        if (idOrganization) {
            return await Organization.findByPk(idOrganization,{
                attributes: ["id","name","image","phone","address","welcomeText", "socialNetworks"],
                include: [{
                    model: Slide,
                    as: 'items',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'id']
                    }
                }]
            })
        }
    } catch (err) {
        console.log(err)
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

module.exports.updateOrganizationService = async(idOrganization, welcomeText, items) => {
    return await Organization.findByPk(idOrganization)
    .then(async(organization) => {
        await Organization.update({
            welcomeText
        },{
            where:{
                id: idOrganization
            }
        })
        .then(async () => {
            await Slide.findAll({
                where: {
                    organizationId: idOrganization
                }
            })
            .then((slides) => {
                forEach(slides, async (value, index) => {
                    await Slide.update({
                        imageUrl: items[index].imageUrl,
                        text: items[index].text
                    },{
                        where:{
                            order: index + 1 
                        }
                    })
                })

            })
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