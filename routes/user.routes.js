const router = require('express').Router();
const userC = require('../controllers/user.controller');

router.post('/register-user', async (req, res) => {
    try {
        const { username, email, password, first_name, last_name, sex, country, birth_date, code } = req.body;
        const fields = [
            {
                name: "username",
                value: username
            }, {
                name: "email",
                value: email
            }, {
                name: "password",
                value: password
            }, {
                name: "first_name",
                value: first_name
            }, {
                name: "last_name",
                value: last_name
            }, {
                name: "sex",
                value: sex
            }, {
                name: "country",
                value: country
            }, {
                name: "birth_date",
                value: birth_date
            }, {
                code: "code",
                value: code
            }
        ];



        const empty = fields.filter((f) => f.value == null);
        if (empty.length > 0) {
            res.status(500).json({
                code: -2,
                message: "Datos faltantes en su solicitud"
            });
        } else {
            const registro = await userC.registrarUsuario(req.body);
            return res.status(200).json(registro);
        }


    } catch (err) {
        res.status(500).json({
            code: -1,
            message: "Error interno " + err
        });
    }




})

router.post('/prepare-register', async (req, res) => {
    try {
        const { username, email, password, first_name, last_name, sex, country, birth_date } = req.body;
        const fields = [
            {
                name: "username",
                value: username
            }, {
                name: "email",
                value: email
            }, {
                name: "password",
                value: password
            }, {
                name: "first_name",
                value: first_name
            }, {
                name: "last_name",
                value: last_name
            }, {
                name: "sex",
                value: sex
            }, {
                name: "country",
                value: country
            }, {
                name: "birth_date",
                value: birth_date
            }
        ];
        const empty = fields.filter((f) => f.value == null);

        if (empty.length > 0) {
            res.status(500).json({
                code: -2,
                message: "Datos faltantes en su solicitud"
            });
        } else {
            const ck_email = await userC.genCodeRegister(req.body);

            return res.status(200).json(ck_email);

        }
    } catch (err) {
        res.status(500).json({
            code: -1,
            message: "Error interno" + err
        });
    }
})










module.exports = router;