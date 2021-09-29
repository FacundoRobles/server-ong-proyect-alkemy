'use strict';

const { Entry } = require('../models/index');

module.exports.saveOne = (params, object) => {
    return Entry.create(object);
};

module.exports.find = async filters => {
    try {
        if (filters.where.id) 
            return await Entry.findOne({ ...filters });
            
        return await Entry.findAll({ ...filters });
    } catch (err) {
        console.log({success:false, data: err});
    }
};

module.exports.deleteOne = async ({ id }) => {
    try {
        const filterId = { where: { id: id } };
        const entry = await Entry.findOne(filterId);
        if (entry)
            return await Entry.update(
                {
                    deletedAt: new Date(),
                    deleted: true
                },
                filterId
            );
        return entry;
    } catch (err) {
        console.log({success:false, data: err});
    }
};
