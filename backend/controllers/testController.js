const express = require("express");
const pool = require('../utils/databaseConnect');
const app = express();

class testController{
    async get_all_user(req, res) {
     const testv = await pool.query('SELECT * from user_table')
        res.json({testv:testv.rows})
    }
    async get_static_user(req, res) {
        pool.query(`SELECT * from user_table WHERE id=$1`, [3], function (err, data) {
            if (err) return res.json({err:err});
            res.json({
                data:data.rows
            });
        });
    }

}

module.exports = new testController();