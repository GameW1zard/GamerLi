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

// Set Handlebars as the view engine
const hbs = expressHandlebars.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Setup static folder
app.use(express.static('public'));

// Data for five people
const data = {
  people: [
    {
      name: "Riven",
      age: 30,
      occupation: "Software Developer",
      bio: "text here",
      github: "text here",
      email: "text here",
      phone: "text here",
    },
    {
      name: "Tomas",
      age: 30,
      occupation: "Software Developer",
      bio: "text here",
      github: "text here",
      email: "text here",
      phone: "text here",
    },
    {
      name: "Trevor",
      age: 30,
      occupation: "Software Developer",
      bio: "text here",
      github: "text here",
      email: "text here",
      phone: "text here",
    },
    {
      name: "Mohammed",
      age: 30,
      occupation: "Software Developer",
      bio: "text here",
      github: "text here",
      email: "text here",
      phone: "text here",
    },
    {
      name: "??",
      age: 30,
      occupation: "Unknown",
      bio: "A mysterious individual.",
      github: "text here",
      email: "text here",
      phone: "text here",
    },
  ]
};

// Route to /homepage
app.get('/', (req, res) => {
  res.render('homePage');
});
// Route to /homepage
app.get('/homePage', (req, res) => {
  res.render('homePage');
});

// Route to /login
app.get('/logIn', (req, res) => {
  res.render('logIn');
});

// Route to /aboutme
app.get('/aboutMe', (req, res) => {
    res.render('aboutMe', data);
});

// Route to /contact
app.get('/contact', (req, res) => {
  res.render('contact', data);
});

// Route to /services
app.get('/services', (req, res) => {
  res.render('services');
});

// Route to /register
app.get('/register', (req, res) => {
  res.render('register');
});

//api routes
app.use(routes);
app.listen (PORT, function (){
    console.log(`App listening on port ${PORT}!`);
<<<<<<< HEAD
});
>>>>>>> d7c8d41107b56798737553bc617bda0ca84cb0e3

// Set up Handlebars.js engine with custom helpers



const hbs = expressHandlebars.create({});



// Inform Express.js on which template engine to use




// sequelize.sync() operation will create and run the tables in the database based on the models defined. If the tables already exist, it will not re-create them unless you pass in { force: true } as an argument, which will force the sync operation to drop the table(s) before re-creating them.
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on ${PORT}. Visit http://localhost:${PORT} in your browser.'));
=======
>>>>>>> b1c831819c9d79d269e67bb7740019564c730caa
});