const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt')
const UniversalTool = require("../utils/UniversalTool")
const {User} = require("../utils/Entities")

class registerController{
    async register_create(req, res, next) {
        const {email, password, nick} = req.body;
        try {
            if (await User.find_id_by_email(email)) return next(ApiError.badRequest("Пользователь с такой почтой уже зарегестрирован!"))
            if (await User.find_id_by_nick(nick)) return next(ApiError.badRequest("Ник уже используется!"))
            const hashpassword = await bcrypt.hash(password, 5)
            const id = await User.create(email, hashpassword, nick)
            const token = UniversalTool.generateJWT(id, email, false)
            return res.json({token})
        } catch (err) {
            return next(ApiError.internal(err.message));
        }
    }
    async register_login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.find_user_by_email(email);
        if (!user) return next(ApiError.badRequest("Пользователь не зарегистрирован!"))
        if(!bcrypt.compareSync(password, user.pass)) {
            return next(ApiError.badRequest("Неправильный пароль!"))
        }
        const token = UniversalTool.generateJWT(user.id, email, user.role);
        return res.json({token});
    }
    async register_check(req, res) {
        const token = UniversalTool.generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
    async register_reset_password(req, res, next) {
        const password = req.body.password;
        const id = req.user.id;
        const hashpassword = await bcrypt.hash(password, 5);
        try {
            await User.reset_password(hashpassword, id)
        }catch (e) {
            return next(ApiError.internal(err.message))
        }
        return res.json()
    }

}

module.exports = new registerController();