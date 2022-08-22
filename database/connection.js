const {Pool} = require('pg');


// const pool = new Pool({
//     user: 'xmjyhamksrqshv',
//     host: 'ec2-52-204-195-41.compute-1.amazonaws.com',
//     database: 'd59m22itunnohi',
//     password: 'ba69bfe014642f31403eb2f487d436c62f4dd38716df49723ea6ba10ccd86585',
//     port: 5432
// })
const pool = new Pool({
    connectionString: 'postgres://xmjyhamksrqshv:ba69bfe014642f31403eb2f487d436c62f4dd38716df49723ea6ba10ccd86585@ec2-52-204-195-41.compute-1.amazonaws.com:5432/d59m22itunnohi',
    ssl: {
      rejectUnauthorized: false
    }
  });

module.exports = {pool};