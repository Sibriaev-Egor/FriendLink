const ApiError = require("../error/ApiError")
const {User} = require("../utils/Entities")

class userController{
    async get_user(req, res, next) {
        let id = req.params.id;
        try {
            const user = await User.get_user_by_id(id)
            if (!user) return next(ApiError.badRequest("Пользователь не найден!"));
            return res.json({
                id: id,
                description: user.description,
                nick: user.nick
            });
        } catch (e){
            return next(ApiError.badRequest(e.message));
        }
    }
    async get_userByNick(req, res, next) {
        let nick = req.body.nick;
        if (!nick) return next(ApiError.badRequest("Данные не указаны!"));
        try {
            const user = await User.get_user_by_nick(nick)
            if (!user) return next(ApiError.badRequest("Пользователь не найден!"));
            return res.json({
                user
            });
        } catch (e){
            return next(ApiError.badRequest(e.message));
        }
    }
    async edit_description(req, res, next) {
        const id = req.user.id
        const description = req.body.description
        try {
            await User.edit_description(description, id)
            return res.json()
        } catch (e){
            return next(ApiError.badRequest(e.message));
        }
    }
    async edit_nick(req, res, next) {
        const id = req.user.id
        const nick = req.body.nick
        try {
            await User.edit_nick(nick, id)
            return res.json()
        } catch (e){
            return next(ApiError.badRequest("Имя уже занято!"));
        }
    }


}

module.exports = new userController();