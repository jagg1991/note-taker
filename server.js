//importing dependencies 
const express = require('express');

//creating port 
//tells node that we are creating an express server
const app = express();
const PORT = process.env.PORT || 8080;

// sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//public is the route file
app.use(express.static('public'));

//api routes

require('./routes/api-routes')(app);
require('./routes/htmlRoutes')(app);




//LISTENER 
//the below code starts the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));