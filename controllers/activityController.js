const { create }  = require('../services/activityServices')

module.exports.saveActivity = async (req, res, next) => {
    try {
        await create(req.params, req.body)
            .then(val => res.status(200).send({
                success: true,
                data: val
            }))
            .catch(err => res.status(401).send({
                success: false,
                message: err.errors[0].message
            }));
    } catch (err) {
        next(err);
    }
};
