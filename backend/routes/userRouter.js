const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require("../middleware/authMiddleware")

router.post('/editDescription', authMiddleware, userController.edit_description)
router.post('/editNick', authMiddleware, userController.edit_nick)
router.get('/:id', userController.get_user)


module.exports = router;