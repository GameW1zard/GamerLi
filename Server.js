const path = require('path');

const express = require('express');

const sequelize = require('./config/connection');

const expressHandlebars = require('express-handlebars');
const routes = require('./routes');

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store); // Initializes sequelize with session store for connecting to database and bake cookies.

const app = express();

const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
// Setting up bare-bone conneection to database and session store; will be updated later as we add models and routes

const sess = { // This is the configuration object for the session middleware
    secret: 'secret',
    cookie: {/* Add options here */},
    resave: 'false',
    saveUninitialized: 'true',
    store: new SequelizeStore({
        db: sequelize
    })
};

// Set up session middleware
app.use(session(sess));
=======
//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api routes
app.use(routes);
app.listen (PORT, function (){
    console.log(`App listening on port ${PORT}!`);
});
>>>>>>> d7c8d41107b56798737553bc617bda0ca84cb0e3

// Set up Handlebars.js engine with custom helpers



const hbs = expressHandlebars.create({});



// Inform Express.js on which template engine to use




// sequelize.sync() operation will create and run the tables in the database based on the models defined. If the tables already exist, it will not re-create them unless you pass in { force: true } as an argument, which will force the sync operation to drop the table(s) before re-creating them.
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on ${PORT}. Visit http://localhost:${PORT} in your browser.'));
});