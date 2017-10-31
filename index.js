'use strict';

const joi = require('joi');

const check = (payload) => {
    const socialUrl = joi.string().min(1).alphanum().allow(null);
    const schema = joi.object({
        facebook : socialUrl.required(),
        twitter  : socialUrl.required(),
        youtube  : socialUrl.required()
    }).required();

    const { error, value } = joi.validate(payload, schema);

    if (error) {
        throw error;
    }

    return value;
};

module.exports = check;
