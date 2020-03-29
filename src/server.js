const express = require('express');
const routers = require('./routers/router');

const app = express();

app.use(express.json());
app.use(routers);

app.listen(4200, () => console.log('Api is running!'));