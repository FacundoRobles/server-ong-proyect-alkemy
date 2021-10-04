const { Activity } = require('../models/index');

module.exports.saveActivity = async ({ id }, body) => {
    if (!id) {
        return await Activity.create(body);
    }

    const activity = await Activity.findOne({ where: { id } });
        if (!activity){ 
            throw new Error();
        }

    await Activity.update({ ...body, updateAt: new Date() }, { where: { id }});
        return body;
};


