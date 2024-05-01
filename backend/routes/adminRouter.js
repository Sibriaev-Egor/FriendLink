const Router = require('express');
const router = new Router();
const adminController = require('../controllers/adminController');

router.post('/changeRole', adminController.change_role);
router.get('/getClaims', adminController.get_claims);
router.post('/deleteClaims', adminController.delete_claims);
router.post('/deletePost', adminController.delete_post);
router.post('/deleteUser', adminController.delete_user);

module.exports = router;