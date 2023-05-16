const router = require('express').Router();
const UserRoutes = require('./UserTable');
const ConsoleRoutes = require('./ConsoleTable');
const GameRoutes = require('./GamesTable');

router.use('/UserTable', UserRoutes);
router.use('/ConsoleTable', ConsoleRoutes);
router.use('/GamesTable', GameRoutes);

module.exports = router;