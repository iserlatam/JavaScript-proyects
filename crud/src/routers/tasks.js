const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();

router.get('/tasks', TaskController.index);
router.get('/create', TaskController.create);
router.post('/create', TaskController.store);
router.post('/tasks/destroy', TaskController.destroy);

module.exports = router;