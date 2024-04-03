const express = require("express");
const pool = require('../utils/databaseConnect');
const app = express();

class userController{
    async get_user(req, res) {
        let id = req.params.id;
        pool.query("", [id], function (err, data) {
            if (!err) return res.json({
                data: data
            });
        });
    }
    async create_user(req, res) {
        pool.query(`SELECT * from user_table WHERE id=$1`, [3], function (err, data) {
            if (err) return res.json({err:err});
            res.json({
                data:data.rows
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