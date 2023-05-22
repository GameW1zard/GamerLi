// Data for five people
const router = require('express').Router();
const withAuthorization = require('../utils/auth');


// Route to /homepage
router.get('/', (req, res) => {
    res.render('homePage');
});

// Route to /login
router.get('/logIn', (req, res) => {
    res.render('myLibrary');
});

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
router.get('/mylibrary', withAuthorization, (req, res) => {
    res.render('mylibrary', {logged_in: req.session.logged_in, user_name: req.session.user_name});
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

module.exports = router;
