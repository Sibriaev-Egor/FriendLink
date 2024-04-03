const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.get_user);
router.get('/edit/:id', userController.edit_user);
router.get('/create', userController.create_user);

module.exports = router;