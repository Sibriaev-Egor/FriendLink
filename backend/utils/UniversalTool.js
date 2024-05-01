const jwt = require('jsonwebtoken')
class UniversalTool {
    static generateJWT(id, email, role) {
        return jwt.sign(
            {id, email, role},
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )
    }
    static decodeJWT(token) {
        return jwt.verify(token, process.env.SECRET_KEY)
    }
}

module.exports = UniversalTool