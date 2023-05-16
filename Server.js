const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const expressHandlebars = require('express-handlebars');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api routes
app.use(routes);
app.listen (PORT, function (){
    console.log(`App listening on port ${PORT}!`);
});

// Set up Handlebars.js engine with custom helpers

const hbs = expressHandlebars.create({});

// Inform Express.js on which template engine to use