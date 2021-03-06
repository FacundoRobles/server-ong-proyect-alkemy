const {
    saveActivity,
    findAllActivities,
    findActivityServices,
    deleteActivityServices
} = require('../services/activityServices')

module.exports = {

    saveActivity: async (req, res, next) => {
        try {
            await saveActivity(req.params, req.body)
                .then(val => res.status(201).send({
                    success: true,
                    data: val
                }))
                .catch(err => res.status(401).send({
                    success: false,
                    message: (err.errors) ? err.errors[0].message : 'Activity not found'
                }));
        } catch (err) {
            next(err);
        }
    },
    findActivity: async (req, res) => {
        if (req.params.id) {
            return await findActivityServices(req.params.id)
                .then(val => res.status(201).send({
                    success: true,
                    data: val
                }))
                .catch(err => res.status(401).send({
                    success: false,
                    message: (err.errors) ? err.errors[0].message : 'Activity not found'
                }));
        }
        return await findAllActivities()
            .then(val => res.status(201).send({
                success: true,
                data: val
            }))
            .catch(err => res.status(401).send({
                success: false,
                message: (err.errors) ? err.errors[0].message : 'Activity not found'
            }));
    },

    deleteActivity: async (req, res) => {
        if (req.params.id) {
            const activityToDelete = await findActivityServices(req.params.id);
            await deleteActivityServices(activityToDelete)
                .then(val => res.status(200).send({
                    success: true,
                    data: val
                }))
                .catch(err => res.status(401).send({
                    success: false,
                    message: (err.errors) ? err.errors[0].message : 'Activity not found'
                }));
        } else {
            return res.status(404).send({
                success: false,
                message: (err.errors) ? err.errors[0].message : 'Activity to delete not found'
            });
        }

    }


}