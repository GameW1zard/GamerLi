const path = require('path');

const express = require('express');

const sequelize = require('./config/connection');

const expressHandlebars = require('express-handlebars');

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store); // Initializes sequelize with session store for connecting to database and bake cookies.

const app = express();



const PORT = process.env.PORT || 3001;



// Set up Handlebars.js engine with custom helpers



const hbs = expressHandlebars.create({});



// Inform Express.js on which template engine to use