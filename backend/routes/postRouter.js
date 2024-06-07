const Router = require('express');
const router = new Router();
const postController = require('../controllers/postController');
const authMiddleware = require("../middleware/authMiddleware")

router.get('/getAll/:id', authMiddleware, postController.get_all);
router.get('/get/:id', postController.get_one);
router.get('/news', authMiddleware, postController.news);
router.post('/create', authMiddleware, postController.create);
router.post('/edit', authMiddleware, postController.edit);
router.post('/like', authMiddleware, postController.like);
router.post('/delete', authMiddleware, postController.delete);
router.post('/claim', authMiddleware, postController.claim);

module.exports = router;