//step 1: import the requrided modules
const express = require('express');
//step2:create an instance of express application
const app = express();
//step3: defining aroute handler for the root url('/)
//get method - it means to get/ retrive data from the server
//when user make a resqest to the root url(('url-api') the server will give the data
app.get('/url-api', (req, res) =>
{
    res.send('hello the backend server is working')

});
//define arote/path-api
app.get('/login', (req, res) =>
{
    res.send('this is the login page')
});
//step4: start the server and listen on a specific port
app.listen(3000, () =>
{
    console.log('server is running on port 3000-http://localhost:3000');
});