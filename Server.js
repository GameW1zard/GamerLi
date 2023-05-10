const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const expressHandlebars = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers

const hbs = expressHandlebars.create({});

// Inform Express.js on which template engine to use