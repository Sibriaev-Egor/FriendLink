const {Friends} = require('../utils/Entities')
const ApiError = require('../error/ApiError')
UniversalTool = require("../utils/UniversalTool")

class friendsController{
    async friends(req, res, next) {
        const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null
        if (!(token || req.query.id)) return next(ApiError.badRequest("Пользователь не указан!"))
        let decoder;
        try {
            decoder = token ? UniversalTool.decodeJWT(token) : null
        }catch (e) {
            return next(ApiError.forbidden("Сессия истекла!"))
        }
        const id = req.query.id ? req.query.id : decoder.id
        try {
            const friends = await Friends.friends(id)
            return res.json({rows: friends})
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
    async subs(req, res, next) {
        const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null
        if (!(token || req.query.id)) return next(ApiError.badRequest("Пользователь не указан!"))
        let decoder;
        try {
            decoder = token ? UniversalTool.decodeJWT(token) : null
        }catch (e) {
            return next(ApiError.forbidden("Сессия истекла!"))
        }
        const id = req.query.id ? req.query.id : decoder.id
        try {
            const subs = await Friends.subs(id)
            return res.json({rows: subs})
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
    async subscriptions(req, res, next) {
        const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null
        if (!(token || req.query.id)) return next(ApiError.badRequest("Пользователь не указан!"))
        let decoder;
        try {
            decoder = token ? UniversalTool.decodeJWT(token) : null
        }catch (e) {
            return next(ApiError.forbidden("Сессия истекла!"))
        }
        const id = req.query.id ? req.query.id : decoder.id
        try {

            const subscriptions = await Friends.subscriptions(id)
            return res.json({rows: subscriptions})
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
    async banList(req, res) {
        const id = req.user.id
        const banList = await Friends.banList(id)
        return res.json({rows: banList})
    }
    async doAction(req, res, next) {
        const id1 = req.user.id
        const {id, ban} = req.body
        if (id == id1) return next(ApiError.forbidden("Запрещено!"))
        try {
            await Friends.doAction(id1, id, ban)
            return res.json()
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    async deleteSome(req, res, next) {
        const id1 = req.user.id
        const id = req.body.id
        if (!id) return next(ApiError.badRequest("Пользователь не указан!"))
        try {
            await Friends.delete(id1, id)
            return res.json()
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
    

}

module.exports = new friendsController();