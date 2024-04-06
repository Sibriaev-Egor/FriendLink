const express = require("express");
const pool = require('../utils/databaseConnect');
const ApiError = require("../error/ApiError")
const app = express();
const MyTime = require("../utils/MyTime")

class postController{
    async get_all(req, res, next) {
        const userId = req.params.id
        if (!userId) return next(ApiError.badRequest("Пользователь не найден!"))
        try {
            const data1 = await pool.query(`SELECT * FROM post_table WHERE user_id=$1`, [userId]);
            if (!data1.rows[0]) return next(ApiError.badRequest("У пользователя нет постов!"))
            const data2 = await pool.query(`select count(*), post_id from like_table where post_id in 
                (select id from post_table where user_id=$1) group by post_id`, [userId]);
            return res.json({posts: data1.rows, likes: data2.rows})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async get_one(req, res, next) {
        const id = req.params.id
        if (!id) return next(ApiError.badRequest("Пост не найден!"))
        try {
            const data1 = await pool.query(`SELECT * FROM post_table WHERE id=$1`, [id]);
            if (!data1.rows[0]) return next(ApiError.badRequest("Пост не найден!"))
            const data2 = await pool.query(`select count(*) from like_table where post_id=$1 `, [id]);
            return res.json({posts: data1.rows, likes: data2.rows})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async create(req, res, next) {
        const userId = req.user.id
        const {text} = req.body
        if (!text) return next(ApiError.badRequest("Нет данных!"))
        
        try {
            const data = await pool.query(`INSERT INTO post_table (user_id, text, date) VALUES ($1, $2, $3) RETURNING id, date`, 
                [userId, text, MyTime.nowDate()]);
            return res.json({data: data.rows[0]})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async edit(req, res, next) {
        const userId = req.user.id
        const {id, text} = req.body
        if (!text || !id) return next(ApiError.badRequest("Нет данных!"))
        try {
            await pool.query(`UPDATE post_table SET text=$1 WHERE id=$2 AND user_id=$3`, [text, id, userId]);
            return res.json()
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async like(req, res, next) {
        const userId = req.user.id
        const {id, isLike} = req.body
        if (!id) return next(ApiError.badRequest("Пост не найден!"))
        try {
            if (isLike){
                await pool.query(`INSERT INTO like_table VALUES ($1, $2) ON CONFLICT DO NOTHING`, [userId, id]);
            }
            else {
                await pool.query(`DELETE FROM like_table WHERE user_id=$1 AND post_id=$2`, [userId, id]);
            }

            return res.json()
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async delete(req, res, next) {
        const userId = req.user.id
        const {id} = req.body
        if (!id) return next(ApiError.badRequest("Пост не найден!"))
        try {
            await pool.query(`DELETE FROM post_table WHERE user_id=$1 AND id=$2`, [userId, id]);
            return res.json()
        } catch (e) {
            return next(ApiError.internal(e.message))
        }

    }
    async claim(req, res, next) {
        const userId = req.user.id
        const {id, description} = req.body
        if (!id) return next(ApiError.badRequest("Пост не найден!"))
        try {
            await pool.query(`INSERT INTO claim_table VALUES ($1, $2, $3) ON CONFLICT (user_id, post_id) DO UPDATE set description=$3`,
                [userId, id, description]);
            return res.json()
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

}

module.exports = new postController();