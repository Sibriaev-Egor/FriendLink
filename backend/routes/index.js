const Router = require('express');
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware")
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware")
const ApiError = require("../error/ApiError")

const user_router = require("./userRouter");
const register_router = require("./registerRouter");
const test_router = require("./testRouter");
const admin_router = require("./adminRouter")
const friends_router = require("./friendsRouter")
const post_router = require("./postRouter")


router.use('/user', user_router);
router.use('/register', register_router);
router.use('/test', test_router);
router.use('/admin', authMiddleware, checkRoleMiddleware(true), admin_router);
router.use('/friends', friends_router);
router.use('/post', post_router);
router.use('*', function(req, res, next) {
    return next(ApiError.badRequest("Путь не найден!"));
})

module.exports = router;