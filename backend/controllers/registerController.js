const express = require("express");

const pool = require('../utils/databaseConnect');


const app = express();

class tasksPageController{
    async register_enter(req, res) {
        const login = req.body.login;
        const pass = req.body.pass;
        pool.query("SELECT pass, id FROM user_table WHERE login=?", [login], function (err, data) {
            if (err) return res.json({err:err});
            if (data[0]) {
                if (data[0].pass === pass) {
                    res.json({
                        id:data[0].id
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
        pool.query("SELECT id FROM user_table WHERE login=?", [login], function (err, data) {
            if (err) return res.json({err:err});
            if(data[0]) {
                return res.json({
                    id: data[0].id
                })
            }
            else {
                return res.json();
            }

        });
    }
    async register_reset_password(req, res) {
        let id = req.params.id;
        const password = req.body.password;
        pool.query("UPDATE `user` SET `password`=? WHERE `user`.`id`=?", [password, id], function (err, data) {
            if (err) return res.json({err:err});
            return res.json();
        });
    }

}

module.exports = new tasksPageController();