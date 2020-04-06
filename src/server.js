const express = require('express');
const routers = require('./routers/router');

require('dotenv').config();
const port = process.env.PORT_CONNECT;

const app = express();

app.use(express.json());
app.use(routers);

app.listen(port, () => console.log('Api is running on port: ' + port));