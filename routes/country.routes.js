const express = require('express');
const router = express.Router();

const parametricaController = require('../controllers/parametrica.controller');


router.get('/countries', async(req, res)=>{
    try{
        const countries = await  parametricaController.getCountries();
        if(JSON.stringify(countries)!== '[]'){
            return res.status(200).json({
                code: 1,
                message: "Informacion encontrada",
                data: countries
            })
        }else{
            return res.status(200).json({
                code: 1,
                message: "No se ha encontrado informacion",
                data: []
            })
        }
    }catch(err){
        res.status(500).json({
            code: -1,
            message: "Error interno"
        });
    }
})
module.exports = router;