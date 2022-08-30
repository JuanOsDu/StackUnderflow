const express = require('express');
const app = express();
const { pool } = require('./database/connection');
app.use(express.json());



const port = process.env.PORT || 3000;

//app.use('/v1/api', require('./routes/country.routes'));
app.use('/v1/api', require('./routes/user.routes'));
app.listen(port, () => {
    console.log("Online on "+port);

})