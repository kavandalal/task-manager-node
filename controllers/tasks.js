const getAllTasks = (req, res) => {
	res.send('all items from controller ');
};

const createTask = (req, res) => {
	res.json(req.body);
};

const getTask = (req, res) => {
	res.json({ id: req.params.id });
	//{{URL}}/tasks/hello
	//for above url the id will be "hello" and we can see that in the postman server
};

const updateTask = (req, res) => {
	res.send('update task');
};

const deleteTask = (req, res) => {
	res.send('delete task');
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
