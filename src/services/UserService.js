const db = require('../db/database');

module.exports = {

    async registerUser(data) {
        try {
            const { name, lastname, document, mail, phone, dateBorn } = data;
            return await db('user').insert({
                name,
                lastname,
                document,
                mail,
                phone,
                dateBorn
            }).returning('id')
                .then(res => {
                    return res[0]
                })
                .catch(err => console.log(err));
        } catch (err) {
            return err;
        }
    },

    async existsUser(data) {
        try {
            return await db('user')
                .where('document', data)
                .select(1)
                .first();
        } catch (err) {
            return err;
        }
    },
};