const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const expressHandlebars = require('express-handlebars');
const routes = require('./controllers');
const hbs = expressHandlebars.create();
const session = require('express-session');

// Initializes sequelize 'store' with express-session for connecting and baking cookies
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

 // This is the object the connect-express-session middleware links to the sequelize-store middlewar
const sess = {
    secret: 'secret',
    cookie: { },
    resave: 'false',
    saveUninitialized: 'true',
    store: new SequelizeStore({
        db: sequelize
    })
};

// Express-session & sequelize-store middleware
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.use(routes);

// Set Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// sequelize.sync() operation creates and runs tables in the database. It will not re-create them unless you pass in { force: true } as an argument, which will force the sync operation to drop pre-existing table(s) before re-creating them.
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}. Visit http://localhost:${PORT} in your browser.`));
});