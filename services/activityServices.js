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

module.exports.findActivityServices = async (id) => {
    return await Activity.findByPk(id);
}

module.exports.findAllActivities = async () => {
    return await Activity.findAll();
}

module.exports.deleteActivityServices = async (activityToDelete) => {
    return await activityToDelete.destroy();
}


