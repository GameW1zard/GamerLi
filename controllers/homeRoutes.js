// Data for five people
const router = require('express').Router();
const withAuthorization = require('../utils/auth');
const Consoles = require('../models/Consoles');


// Route to /homepage
router.get('/', (req, res) => {
    res.render('homePage1');
});

// Route to /login
// router.get('/logIn', (req, res) => {
//     res.render('myLibrary');
// });

// Route to /aboutme
router.get('/aboutMe', (req, res) => {
    res.render('aboutMe', data);
});

// Route to /contact
router.get('/contact', (req, res) => {
    res.render('contact', data);
});

// Route to /services
router.get('/services', (req, res) => {
    res.render('services');
});

// Route to /register
router.get('/register', (req, res) => {
    res.render('register');
});

// Route to /mylibrary
router.get('/mylibrary', withAuthorization, async (req, res) => {
    let consolefind = await Consoles.findAll({ where: { user_id: req.session.user_id } });
    let consoles = [];
    for (let i = 0; i < consolefind.length; i++) {
        let tempdata = { console_name: consolefind[i].dataValues.console_name, id: consolefind[i].dataValues.id, user_id: req.session.user_id}
        consoles.push(tempdata);
    }

    //console.log(consoles)
    res.render('myLibrary1', {
        logged_in: req.session.logged_in,
         user_id: req.session.user_id,
          user_name: req.session.user_name,
           consoles, farts: "farts"});
});

router.get('/login',(req, res) => {
    if (req.session.logged_in === true) {
        res.redirect('/mylibrary');
        console.log('already logged in')
        return;
    }
    res.render('login',{loggedIn: req.session.logged_in});
});

const data = {
    people: [
        {
            name: "Riven",
            age: 24,
            occupation: "Streamer",
            bio: "Named after videogames and born to play them",
            github: "https://github.com/GameW1zard",
            email: "MrGameW1zardGaming@gmail.com",
            phone: "555-555-5555",
        },
        {
            name: "Trevor",
            age: 30,
            occupation: "",
            bio: "Coding, Gaming",
            github: "https://github.com/TpainMcain",
            email: "trevorwp77@gmail.com",
            phone: "",
        },
        {
            name: "Tomas Pesti ",
            age: 26,
            occupation: "Software Developer",
            bio: "",
            github: "text here",
            email: "https://github.com/tpesti96",
            phone: "",
        },
        {
            name: "Mohammed Asad Bhimjee",
            age: 33,
            occupation: "Software Developer",
            bio: "Chop wood, carry water.",
            github: "https://github.com/Chartok",
            email: "m.bhimjee@outlook.com",
            phone: "",
        },
        // {
        //     name: "??",
        //     age: 30,
        //     occupation: "Unknown",
        //     bio: "A mysterious individual.",
        //     github: "text here",
        //     email: "text here",
        //     phone: "text here",
        // },
    ]
};

module.exports = router;
