require('dotenv').config()
// Variables created as part of global object are available everywhere in the project.
// Using Global Variables in Node.js
// https://stackabuse.com/using-global-variables-in-node-js/
global.db = "contactsDB";
global.dbConnectionString = process.env.MONGODB+ global.db + '?retryWrites=true&w=majority';
global.serverPort = 5000;
// Using MongoDB Explain with Mongoose
// https://masteringjs.io/tutorials/mongoose/explain
// Parameters (explainations)
//  .explain('queryPlanner'), .explain('executionStats'), or .explain('allPlansExecution'). Default: 'queryPlanner'.
// .explain('true') shows all explainations. Does not run the query.
// .explain('false') shows no explainations. Runs query.
// Query Planner output:
// winningPlan is useful for checking whether MongoDB used an index for the query or not.
// stage: 'COLLSCAN' means an index was NOT used.
// inputStage: ... stage: 'IXSCAN' means an index was used, its name is given by the indexName property.
global.explain = false;
const express = require('express');


// Schema based data modeling for mongodb
// https://mongoosejs.com/docs/mongoose
// Whats difference btween ODM and ORM?
const mongoose = require('mongoose');

// You can set mongoose debug options to see operations mongoose sends to mongodb  
mongoose.set('debug', true);

const bodyParser =  require('body-parser');

// HTTP request logger 
// how to use morgan in your express project
const morgan = require('morgan');
const HttpError = require('./models/http-error')

const contactsRoutes = require('./routes/contacts-routes')
// Custom error class 


// Get instance of Express
const app = express();

// REgister middleware 
app.use(morgan('tiny'));
app.use(bodyParser.json());

// Route prefix
app.use('/api/contacts', contactsRoutes);

// Catch unsupported routes (http 400 - bad request) Must come after all registered middleware routes
app.use((req, res, next) => {
    return next(new HttpError(400, 'Route not defined.'));
});

// Default error handling middleware. Use if any middleware before it throws an error
// to prevent server from crashing
// Route controllers use try/catch to try and catch errors
app.use((error, req, res, next) => {
    // Check if a response has already been set. Only one can be sent, otherwise error will be thrown
    if (res.headerSent) {
        return (next.error);
    }

    res.status(error.code || 500).json(
        {
            message: error.message || 'An unknown error as occured. Try again later.'
        }
    )
});

mongoose
    .connect(dbConnectionString)
    .then(() => {

        console.log("Connect to database '" + global.db + "'");

        app.listen(global.serverPort);
        console.log("Node.js/Express Server listening on port " + global.serverPort);
    })
    .catch(err => {
        console.log("Unable to connect to database. Node.js/Express Server not started.\n" + err);
    })


