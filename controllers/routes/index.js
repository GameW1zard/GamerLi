// const router = require('express').Router();
// const apiRoutes = require('../controllers/api');

// router.use('/api', apiRoutes);

// router.use((req,res) => {
//     res.send("<h1>Wrong Route!</h1>")
// });

// module.exports = router;

const express = require('express');

const hbRouter = require('./handlebarRoutes');
const homeRouter = require('../homeRoutes');

const app = express();

app.use('/', homeRouter);
app.use('/views', hbRouter);

module.exports = app;
