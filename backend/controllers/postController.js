const ApiError = require("../error/ApiError")
const MyTime = require("../utils/MyTime")
const {Post, Like, Claim} = require("../utils/Entities")

class postController{
    async get_all(req, res, next) {
        const userId = req.params.id
        if (!userId) return next(ApiError.badRequest("Пользователь не найден!"))
        try {
            const posts = await Post.get_all(userId)
            return res.json({posts})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async get_one(req, res, next) {
        const id = req.params.id
        if (!id) return next(ApiError.badRequest("Пост не найден!"))
        try {
            const post = await Post.get_one(id)
            if (!post) return next(ApiError.badRequest("Пост не найден!"))
            return res.json({post})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async create(req, res, next) {
        const userId = req.user.id
        const {text} = req.body
        if (!text) return next(ApiError.badRequest("Нет данных!"))
        try {
            const post = await Post.create(userId, text, MyTime.nowDate())
            return res.json({post})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async edit(req, res, next) {
        const userId = req.user.id
        const {id, text} = req.body
        if (!text || !id) return next(ApiError.badRequest("Нет данных!"))
        try {
            await Post.edit(text, id, userId)
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
                await Like.like(userId, id)
            }
            else {
                await Like.dislike(userId, id)
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
            await Post.delete(userId, id)
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
            await Claim.create(userId, id, description)
            return res.json()
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

}

module.exports = new postController();