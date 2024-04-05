UniversalTool = require("../utils/UniversalTool")

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: "Не авторизован!"})
        }
        const decoder = UniversalTool.decodeJWT(token)
        req.user = decoder
        next()
    } catch (e) {
        return res.status(401).json({message: "Не авторизован!"})
    }
};