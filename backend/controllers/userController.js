const pool = require('../utils/databaseConnect');
const ApiError = require("../error/ApiError")

class userController{
    async get_user(req, res, next) {
        let id = req.params.id;
        pool.query("SELECT id, description, nick FROM user_table WHERE id=$1", [id], function (err, data) {
            if (err) {
                return next(ApiError.internal(err.message));
            }
            else return res.json({
                id: id,
                description: data.rows[0].description,
                nick: data.rows[0].nick
            });
        });
    }
    async edit_user(req, res) {
        pool.query(`SELECT * from user_table WHERE id=$1`, [3], function (err, data) {
            if (err) return res.json({err:err});
            res.json({
                data:data.rows
            });
        });
    }

}

module.exports = new userController();