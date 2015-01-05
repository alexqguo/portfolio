
/*
 * Routes for website
 */

app = require('./app');

// Main portfolio
app.get('/', function (req, res) {
	res.render('home');
});

app.get('/links', function (req, res) {
	res.render('links');
});

app.get('/about', function (req, res) {
	res.render('about');
});

app.get('/info', function (req, res) {
	res.render('info');
});

app.get('/projects', function (req, res) {
	res.render('projects');
});