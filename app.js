const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect');
require('dotenv').config();
//to get data from env folder

//middlewares
app.use(express.static('./public'));
// middle ware for you static(public frontend) files
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks); // #1 //see 'routes/tasks.js' what this link does

const port = 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		// default for how to write the env variables
		// with env file we can hide the data we dont want anyone to see
		app.listen(port, console.log(`server is listening to ${port}`));
	} catch (err) {
		console.log(err);
	}
};
start();

// files created in order(backend)
// app.js
//./controllers/tasks.js
// ./routes/tasks.js
// ./db/connect.js
// .env
// models/task.js
