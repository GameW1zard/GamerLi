// Data for five people
const router = require('express').Router();
const withAuthorization = require('../utils/auth');

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
router.get('/', (req, res) => {
    res.render('homepage');
});

// Route to /login
router.get('/logIn', (req, res) => {
    res.render('logIn');
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
    res.render('mylibrary');
});

router.get('/login',(req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;