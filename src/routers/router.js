const routers = require('express').Router();

routers.get('/', (req, res) => res.json({ status : 'Online' }));

module.exports = routers;