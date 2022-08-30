const {pool} = require('../database/connection');
const cripto = require('../utils/password');

const registrarUsuario = async(body)=>{
    try{
        const {username, email, password, first_name, last_name, sex, country, birth_date, code   } = body;

        const passwordH = cripto.hash(password);
        const registro = await pool.query("SELECT * FROM f_regUser($1,$2,$3,$4,$5,$6,$7,$8,$9)", [username, email, passwordH, first_name, last_name, sex, country, birth_date, code]);
        return registro.rows[0];
    }catch(err){
        throw new Error("Error en controlador registrarUsuario "+err);
    }
}
const genCodeRegister = async(body)=>{
    try{
        
        const email = body.email;
        
        const checkEmail = await pool.query("SELECT * FROM f_ckEmaReg($1)", [email]);
       
        if(checkEmail.rows[0].code==1){
            const genCode = await pool.query("SELECT * FROM f_genCodReg($1)", [email]);
            return genCode.rows[0];
        }else{
            return checkEmail.rows[0];
        }
        
    }catch(err){
        throw new Error("Error en controlador genCodeRegister "+err);
    }
}




module.exports = {registrarUsuario, genCodeRegister};


