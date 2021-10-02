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
/*
const saveActivity = async(req, res) => {
   try{
        if(!req.body.name || !req.body.content){
            res.status(204).send({
                success:false,
                message:'Please complete the fields'
            })
        }
        const newActivity = await activity.create(req.body)
        return res.status(201).send({
            success:true,
            data:{
                activities:newActivity
            }
        })
   }catch(err){
        return res.status(400).send({
            success:false,
            message:err.message
        })
   }

}

module.exports = {
    createActivity
}

*/