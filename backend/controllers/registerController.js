const pool = require('../utils/databaseConnect');
const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const UniversalTool = require("../utils/UniversalTool")

class registerController{
    async register_create(req, res, next) {
        const {email, password, nick} = req.body;
        try {
            if ((await pool.query(`SELECT id from user_table WHERE email=$1`, [email])).rows[0]) return next(ApiError.badRequest("Пользователь с такой почтой уже зарегестрирован!"))
            if ((await pool.query(`SELECT id from user_table WHERE nick=$1`, [nick])).rows[0]) return next(ApiError.badRequest("Ник уже используется!"))
            const hashpassword = await bcrypt.hash(password, 5)
            const data = await pool.query(`INSERT INTO user_table (email, pass, nick) VALUES ($1, $2, $3) RETURNING id`, [email, hashpassword, nick])
            const token = UniversalTool.generateJWT(data.rows[0].id, email, false)
            return res.json({token})
        } catch (err) {
            return next(ApiError.internal(err.message));
        }
    }
    async register_login(req, res, next) {
        const {email, password} = req.body;
        const data = await pool.query(`SELECT pass, id, role FROM user_table WHERE email=$1`, [email]);
        if (!data.rows[0]) return next(ApiError.badRequest("Пользователь не зарегистрирован!"))
        if(!bcrypt.compareSync(password, data.rows[0].pass)) {
            return next(ApiError.badRequest("Неправильный пароль!"))
        }
        const token = UniversalTool.generateJWT(data.rows[0].id, email, data.rows[0].role);
        return res.json({token});
    }
    async register_check(req, res) {
        const token = UniversalTool.generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
    async register_reset_password(req, res, next) {
        let id = req.query.id;
        const pass = req.body.pass;
        if (!id) {
            return next(ApiError.badRequest("Не задан id"))
        }
        pool.query("UPDATE user_table SET pass=$1 WHERE id=$2", [pass, id], function (err, data) {
            if (err) return res.json({err:err});
            return res.json();
        });
    }

}

module.exports = new registerController();