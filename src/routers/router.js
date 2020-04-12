const routers = require('express').Router();

//controllers
const SegUserController = require('../controllers/SegUserController');

//SegUser
routers.post('/register', SegUserController.register);

//Test application
routers.get('/', (req, res) => res.json({ status : 'Online' }));

module.exports = routers;