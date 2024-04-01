const Router = require('express');
const router = new Router();
const testController = require('../controllers/testController');

router.get('/getall', testController.get_all);
router.get('/getstatuser', testController.get_static_user);

module.exports = router;