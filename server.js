//importing dependencies 
const express = require('express');

//creating port 
//tells node that we are creating an express server
const app = express();
const PORT = process.env.PORT || 8080;

// sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sets public as the root folder when coming from front end. 
app.use(express.static('public'));

//api routes
require('.routes/htmlRoutes')(app);

require('/routes/api-routes')(app)


//LISTENER 
//the below code starts the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));