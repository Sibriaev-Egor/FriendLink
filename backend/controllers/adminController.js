const {User, Claim, Post} = require("../utils/Entities")
const ApiError = require("../error/ApiError")

class adminController{
    async change_role(req, res, next) {
        const {id, role} = req.body
        if (!id) return next(ApiError.badRequest("Пользователь не указан!"))
        try {
            await User.change_role(role, id)
            return res.json({message: `Роль пользователя ${id} изменилась!`})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async get_claims(req, res, next) {
        try {
            const claims = await Claim.get()
            return res.json({claims})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async delete_claims(req, res, next) {
        const {id} = req.body
        if (!id) return next(ApiError.badRequest("Пост не указан!"))
        try {
            await Claim.delete(id);
            return res.json({message: `Жалобы на пост ${id} удалены`})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async delete_post(req, res) {
        const {id} = req.body
        if (!id) return next(ApiError.badRequest("Пост не указан!"))
        try {
            await Post.delete(null, id)
            return res.json({message: `Пост ${id} был удалён`})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async delete_user(req, res) {
        const {id} = req.body
        if (!id) return next(ApiError.badRequest("Пользователь не указан!"))
        try {
            await User.delete(id)
            return res.json({message: `Пользователь ${id} был удалён`})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

}

module.exports = new adminController();