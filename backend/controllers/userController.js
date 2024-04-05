const pool = require('../utils/databaseConnect');
const ApiError = require("../error/ApiError")

class userController{
    async get_user(req, res, next) {
        let id = req.params.id;
        try {
            const data = await pool.query("SELECT id, description, nick FROM user_table WHERE id=$1", [id])
            if (!data.rows[0]) return next(ApiError.badRequest("Пользователь не найден!"));
            return res.json({
                id: id,
                description: data.rows[0].description,
                nick: data.rows[0].nick
            });
        } catch (e){
            return next(ApiError.badRequest(e.message));
        }
    }
    async edit_description(req, res, next) {
        const id = req.user.id
        const description = req.body.description
        try {
            const data = await pool.query("UPDATE user_table SET description=$1 WHERE id=$2", [description, id])
            return res.json()
        } catch (e){
            return next(ApiError.badRequest(e.message));
        }
    }
    async edit_nick(req, res, next) {
        const id = req.user.id
        const nick = req.body.nick
        try {
            const data = await pool.query("UPDATE user_table SET nick=$1 WHERE id=$2", [nick, id])
            return res.json()
        } catch (e){
            return next(ApiError.badRequest("Имя уже занято!"));
        }
    }

}

module.exports = new userController();