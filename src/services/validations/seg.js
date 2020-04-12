const Joi = require('@hapi/joi');

module.exports = {

    //Joi validation requests
    
    async registerValidation (data) {
        const schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
        lastname: Joi.string().min(3).max(255).required(),
        document: Joi.string().min(8).required(),
        phone: Joi.string().min(8).required(),
        mail: Joi.string().min(9).max(255).email().required(),
        pass: Joi.string().min(8).max(1024).required(),
        dateBorn: Joi.string().required()   
        });

        return schema.validate(data);
    },

}
