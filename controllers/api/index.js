const router = require('express').Router();
const UserRoutes = require('./UserTable');
const ConsoleRoutes = require('./ConsoleTable');
const GameRoutes = require('./GamesTable');
const Login = require('./loginRoutes');

router.use('/UserTable', UserRoutes);
router.use('/ConsoleTable', ConsoleRoutes);
router.use('/GamesTable', GameRoutes);
router.use('/Login', Login);

module.exports = router;