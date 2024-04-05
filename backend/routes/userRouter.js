const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.get_user)
router.post('/edit/:id', userController.edit_user)

module.exports = router;