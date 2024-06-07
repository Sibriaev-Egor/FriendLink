const Router = require('express');
const router = new Router();
const friendsController = require('../controllers/friendsController');
const authMiddleware = require("../middleware/authMiddleware")

router.get('/getFriendsList', friendsController.friends);
router.get('/getSubsList', friendsController.subs);
router.get('/getSubscriptionsList', friendsController.subscriptions);
router.get('/getBanList', authMiddleware, friendsController.banList)
router.post('/action', authMiddleware, friendsController.doAction)
router.post('/delete', authMiddleware, friendsController.deleteSome)
router.post('/check', authMiddleware, friendsController.check)

module.exports = router;