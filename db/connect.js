const mongoose = require('mongoose')

// const connectionString = 'mongodb+srv://NodeProject:np12345@taskmanagerproject.kapew.mongodb.net/TaskManager?retryWrites=true&w=majority'
// here TaskManager is the new database name that would be created automatically by the mongo
// if password is false then we would get Authentication Failed Error

const connectDB = (url) =>{
    return mongoose
    .connect(url,{
        useNewUrlParser:true,
        //the above line is jsut so you dont see the desciption warrnings 
        //in the new version you might not even need the above line 
    
    })
}
// this function is used in app.js file to connect the db with our app 

module.exports = connectDB ;