const express = require("express");
const pool = require('../utils/databaseConnect');
const app = express();
const ApiError = require("../error/ApiError")

class adminController{
    async change_role(req, res, next) {
        const {id, role} = req.body
        if (!id) return next(ApiError.badRequest("Пользователь не указан!"))
        try {
            await pool.query(`UPDATE user_table SET role=$1 WHERE id=$2`, [role, id]);
            return res.json({message: `Роль пользователя ${id} изменилась!`})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async get_claims(req, res, next) {
        try {
            const data = await pool.query(`SELECT * FROM claim_table LIMIT 20`);
            return res.json({data: data.rows})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async delete_claims(req, res, next) {
        const {id} = req.body
        if (!id) return next(ApiError.badRequest("Пост не указан!"))
        try {
            await pool.query(`DELETE FROM claim_table WHERE post_id=$1`, [id]);
            return res.json({message: `Жалобы на пост ${id} удалены`})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async delete_post(req, res) {
        const {id} = req.body
        if (!id) return next(ApiError.badRequest("Пост не указан!"))
        try {
            await pool.query(`DELETE FROM post_table WHERE id=$1`, [id]);
            return res.json({message: `Пост ${id} был удалён`})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async delete_user(req, res) {
        const {id} = req.body
        if (!id) return next(ApiError.badRequest("Пользователь не указан!"))
        try {
            await pool.query(`DELETE FROM user_table WHERE id=$1`, [id]);
            return res.json({message: `Пользователь ${id} был удалён`})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

}

module.exports = new adminController();