const express = require("express");

const pool = require('../utils/databaseConnect');


const app = express();

class registerController{
    async register_enter(req, res) {
        const login = req.body.login;
        const pass = req.body.pass;
        pool.query("SELECT pass, id FROM user_table WHERE login=$1", [login], function (err, data) {
            if (err) return res.json({err:err});
            if (data.rows[0]) {
                if (data.rows[0].pass === pass) {
                    res.json({
                        id:data.rows[0].id
                    });
                } else {
                    res.json({
                        message: "Пароли не совпадают!"
                    });
                }
            } else res.json({
                message: "Юзер не зарегистрирован!"
            });
        });
    }
    async register_check(req, res) {
        const login = req.body.login;
        pool.query("SELECT id FROM user_table WHERE login=$1", [login], function (err, data) {
            if (err) return res.json({err:err});
            if(data.rows[0]) {
                return res.json({
                    id: data.rows[0].id
                })
            }
            else {
                return res.json();
            }

        });
    }
    async register_reset_password(req, res) {
        let id = req.params.id;
        const pass = req.body.pass;
        pool.query("UPDATE user_table SET pass=$1 WHERE id=$2", [pass, id], function (err, data) {
            if (err) return res.json({err:err});
            return res.json();
        });
    }

}

module.exports = new registerController();