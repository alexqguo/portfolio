
/*
 * Routes for website
 */

app = require('./app');

// Main portfolio
app.get('/', function (req, res) {
	res.render('portfolio-layout');
});