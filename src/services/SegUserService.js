const db = require('../db/database');

const { registerValidation } = require('./validations/seg');
const { existsUser, registerUser } = require('./UserService');
const { generateCrypt } = require('../helpers/crypt');

module.exports = {

    async registerSegUser(data) {
        try {
            const body = data.body;
            const { document, pass } = data.body;

            var error = await registerValidation(body);
            if (error) return "Wrong data sending.";

            const userExists = await existsUser(document);
            if (userExists) return "User Exists";

            const user_id = await registerUser(body);
            const hashPassword = await generateCrypt(pass);

            return await db('segUser').insert({
                user_id,
                login: document,
                pass: hashPassword
            }).returning('*')
                .then(res => {
                    return res
                })
                .catch(err => console.log(err));
        } catch (err) {
            return err;
        }
    },
};