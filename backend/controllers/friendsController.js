const express = require("express");
const pool = require('../utils/databaseConnect');
const app = express();
const ApiError = require('../error/ApiError')
UniversalTool = require("../utils/UniversalTool")

class friendsController{
    async friends(req, res, next) {
        const token = req.headers.authorization.split(' ')[1]
        if (!(token || req.query.id)) return next(ApiError.badRequest("Пользователь не указан!"))
        const decoder = token ? UniversalTool.decodeJWT(token) : null
        const id = req.query.id ? req.query.id : decoder.id
        try {
            const data = await pool.query(`select friends_table.user2_id from friends_table join friends_table as t2 on 
                   friends_table.user1_id = t2.user2_id and friends_table.user2_id = t2.user1_id 
                   and friends_table.ban = t2.ban where friends_table.user1_id = $1 and friends_table.ban = 'false'`, 
                   [id]);
            return res.json({rows: data.rows})
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
    async subs(req, res, next) {
        const token = req.headers.authorization.split(' ')[1]
        if (!(token || req.query.id)) return next(ApiError.badRequest("Пользователь не указан!"))
        const decoder = token ? UniversalTool.decodeJWT(token) : null
        const id = req.query.id ? req.query.id : decoder.id
        try {
            const data = await pool.query(`select user1_id from friends_table where user2_id = $1 and ban = 'false'
            and user1_id not in (select user2_id from friends_table where user1_id = $1)`,
                [id]);
            return res.json({rows: data.rows})
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
    async subscriptions(req, res, next) {
        const token = req.headers.authorization.split(' ')[1]
        if (!(token || req.query.id)) return next(ApiError.badRequest("Пользователь не указан!"))
        const decoder = token ? UniversalTool.decodeJWT(token) : null
        const id = req.query.id ? req.query.id : decoder.id
        try {
            const data = await pool.query(`select user2_id from friends_table where user1_id = $1 and ban = 'false'
            and user2_id not in (select user1_id from friends_table where user2_id = $1)`,
                [id]);
            return res.json({rows: data.rows})
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
    async banList(req, res) {
        const id = req.user.id
        const data = await pool.query(`select user2_id from friends_table where user1_id=$1 and ban='true'`, [id]);
        return res.json({rows: data.rows})
    }
    async doAction(req, res, next) {
        const id1 = req.user.id
        const {id, ban} = req.body
        if (id == id1) return next(ApiError.forbidden("Запрещено!"))
        try {
            await pool.query(`INSERT into friends_table values($1, $2, $3) ON CONFLICT (user1_id, user2_id) DO UPDATE set ban=$3`, 
                [id1, id, ban]);
            return res.json()
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async deleteSome(req, res, next) {
        const id1 = req.user.id
        const id = req.body.id
        if (!id) return next(ApiError.badRequest("Пользователь не указан!"))
        await pool.query(`delete from friends_table where user1_id=$1 and user2_id=$2`, [id1, id]);
        return res.json()
    }
    

}

module.exports = new friendsController();