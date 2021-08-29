const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');

//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks); // #1 //see 'routes.tasks.js' what this link does

const port = 3000;

app.listen(port, console.log(`server is listening to ${port}`));
