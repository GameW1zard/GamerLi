const path = require('path');

const express = require('express');

const sequelize = require('./config/connection');

const expressHandlebars = require('express-handlebars');

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store); // Initializes sequelize with session store for connecting to database and bake cookies.

const app = express();

const PORT = process.env.PORT || 3001;

// Setting up bare-bone conneection to database and session store; will be updated later as we add models and routes
const sess = {
    secret: '',
    cookie: {},
    resave: '',
    saveUninitialized: '',
    store: new SequelizeStore({
        db: sequelize
    })
};

// Set up Handlebars.js engine with custom helpers



const hbs = expressHandlebars.create({});



// Inform Express.js on which template engine to use