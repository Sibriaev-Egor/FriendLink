const Router = require('express');
const router = new Router();
const registerController = require('../controllers/registerController');
const authMiddleware = require("../middleware/authMiddleware")

router.post('/login', registerController.register_login);
router.get('/check', authMiddleware, registerController.register_check);
router.post('/resetPassword', authMiddleware, registerController.register_reset_password);
router.post('/createUser', registerController.register_create);


module.exports = router;