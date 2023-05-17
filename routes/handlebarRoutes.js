// Data for five people
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
app.get('/homePage', (req, res) => {
    res.render('homePage');
});

// Route to /login
app.get('/logIn', (req, res) => {
    res.render('logIn');
});

// Route to /aboutme
app.get('/aboutMe', (req, res) => {
    res.render('aboutMe', data);
});

// Route to /contact
app.get('/contact', (req, res) => {
    res.render('contact', data);
});

// Route to /services
app.get('/services', (req, res) => {
    res.render('services');
});

// Route to /register
app.get('/register', (req, res) => {
    res.render('register');
});

// Route to /mylibrary
app.get('/mylibrary', (req, res) => {
    res.render('mylibrary');
});