const router = require('express').Router();

const modelRoutes = require('../model');

router.use('/model', modelRoutes);

module.exports = router;