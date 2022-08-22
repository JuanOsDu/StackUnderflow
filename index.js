const express = require('express');
const app = express();
const { pool } = require('./database/connection');
app.use(express.json());




app.use('/v1/api', require('./routes/country.routes'));
app.listen(3000, () => {
    console.log("Online on 3000");

})