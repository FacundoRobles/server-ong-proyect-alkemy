const { saveActivity }  = require('../services/activityServices')

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
    
   
     
}

