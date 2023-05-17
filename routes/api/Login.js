const router = require ('express').Router();
const { Users, Consoles, Games } = require ('../../models');

router.post('/', async function (req,res){
    try {
        const userdata = await Users.findOne({where: {user_name: req.body.user_name}});
        if (!userdata) {
            res.status(400).json({message: 'Incorrect username'});
            return;
        }

        // const validpassword = await userdata.checkPassword(req.body.password);

        if (userdata.password != req.body.password) {
            res.status(400).json({message: 'Incorrect password'});
            return;
        }
        res.json({user: userdata, message: 'Login check successful!'});
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;