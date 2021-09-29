'use strict';

const { saveOne } = require('../services/entryServices');

module.exports.saveOne = async (req, res, next) => {
    try {
        const { name, content, image, categoryId } = req.body;
        if (name && content && image && categoryId) {
            const entry = req.body;
            entry.type = 'news';
            await saveOne(null, entry);
            res.status(200).send('Successfully created');
        } else {
            const entries = Object.entries(req.body);
            const nullFields = [];
            for (const [key, value] of entries)
                if (!value) nullFields.push(key);
            
            res.status(401).send(`${nullFields} field cannot be incomplete`);
        }
    } catch (err) {
        next(err);
    }
};
