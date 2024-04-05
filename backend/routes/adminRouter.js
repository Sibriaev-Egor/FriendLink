const Router = require('express');
const router = new Router();
const adminController = require('../controllers/adminController');

// router.post('/enter', registerController.register_enter);
// router.post('/check', registerController.register_check);
// router.post('/resetPassword', registerController.register_reset_password);
router.get('/test', adminController.admin_func);

module.exports = router;