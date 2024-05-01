const Router = require('express');
const router = new Router();
const testController = require('../controllers/testController');

router.get('/test_all', testController.get_all_user);
router.get('/getstatuser', testController.get_static_user);


module.exports = router;