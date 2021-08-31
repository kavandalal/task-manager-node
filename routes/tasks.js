const express = require('express');
const router = express.Router();
const {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
	editTask,
} = require('../controllers/tasks.js'); // we are doing this to make oour code less messy, ifwe will have all the routes in the same file it would be hard to find all the function

router.route('/').get(getAllTasks).post(createTask);
router
	.route('/:id')
	.get(getTask)
	.patch(updateTask)
	// patch will replace our old value with the new value
	.delete(deleteTask)
	.put(editTask);
// put will expect to delete all the previous data and just keep the new data that is passed

router.route('/test').get((req, res) => {
	// this path is appended to the path of the app.js, where it is included in app.js // as you can see in #1 this router is included in app.js for the link of "/api/v1/tasks" so that link will come to this file
	//will add both links as "/api/v1/tasks" and this link "/test" = "/api/v1/tasks/test"
	res.send('test page content');
});

module.exports = router;
