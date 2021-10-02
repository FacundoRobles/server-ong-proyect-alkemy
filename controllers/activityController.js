const Activity = require('../models/activity');

const createActivity = (req, res) => {
    const name = req.body.name;
    const content = req.body.content;

    console.log(req.body.name)

    res.status(200, {
        success: true
    })
    }

module.exports = {
    createActivity
}