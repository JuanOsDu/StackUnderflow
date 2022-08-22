const {pool} = require('../database/connection');




const getCountries = async()=>{
    try{
        const countries = await pool.query("SELECT * FROM country");

        return countries.rows;
    }catch(err){
        throw new Error("Error controlador getCountries: "+ err);
    }
}


module.exports = {getCountries};