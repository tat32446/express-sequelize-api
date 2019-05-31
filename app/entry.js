
require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const routes=require('./routes');

function start(){

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use('/api', routes);
app.listen(port, () => console.log(`Server started on ${port}`));

}

module.exports.start=start;