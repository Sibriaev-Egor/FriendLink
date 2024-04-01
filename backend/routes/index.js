const Router = require('express');
const router = new Router();
// const tasks_page_router = require('./tasksPageRouter');
// const task_router = require('./taskRouter');
// const user_router = require('./userRouter');
const register_router = require('./registerRouter');
const test_router = require('./testRouter');


// router.use('/tasksPage', tasks_page_router);
// router.use('/task', task_router);
// router.use('/user', user_router);
router.use('/register', register_router);
router.use('/test', test_router);

module.exports = router;