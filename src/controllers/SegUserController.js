const { registerSegUser } = require('../services/SegUserService');

module.exports = {

    async register (req, res) {
        try{
            const data = await registerSegUser(req);
            res.send({data});
        }catch(err){
            res.status(400).send(err);
        }
    },

};