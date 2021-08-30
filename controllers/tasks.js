const Task = require('../models/Task');
const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		// syntax to get all the data from our database
		// https://mongoosejs.com/docs/api/query.html#query_Query-find
		res.status(200).json({ tasks: tasks });
	} catch (err) {
		res.status(500).json({ msg: err });
	}

	res.send('all items from controller ');
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};

const getTask = async (req, res) => {
	// res.json({ id: req.params.id });
	//{{URL}}/tasks/hello
	//for above url the id will be "hello" and we can see that in the postman server
	try {
		const { id: taskID } = req.params;
		const task = await Task.findOne({ _id: taskID });
		res.status(200).json({ task });
		if (!task) {
			return res.status(404).json({ msg: `NO task with id : ${taskID} found` });
			// the above error is executed if the len(id) is same as the _id but id is not found
		}
	} catch (err) {
		res.status(500).json({ msg: err });
		// the above error is executed if the len(id) is not same as the _id and id is not found
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findOneAndDelete({ _id: taskID });
		if (!task) {
			return res.status(404).json({ msg: `NO task with id : ${taskID} found` });
		}
		res.status(200).json({ task });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};

const updateTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;

		const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
			new: true,
			runValidators: true,
		});
		// without the 3rd parameter
		// 1) " new "it will show the old value but will update it
		// 2) " runValidators " will check the validators we wrote in the task,js file in models
		if (!task) {
			return res.status(404).json({ msg: `NO task with id : ${taskID} found` });
		}
		res.status(200).json({ task });
	} catch (err) {
		res.status(500).json({ msg: err });
	}
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
