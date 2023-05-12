const router = require('express').Router();

const apiRpoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRpoutes);

module.exports = router;
