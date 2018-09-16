require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;
const skills = require('./skills');
const projects = require('./projects.js');
const mailKey = process.env.MAILGUN_API_KEY;
const mailDomain = process.env.MAILGUN_DOMAIN;
const mailgun = require('mailgun-js')({apiKey: mailKey, domain: mailDomain});

app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bp.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Hooked on ${port}`);
});

app.get('/', function(req, res) {
    res.render('index', {skills, projects});
});

app.get('/resume', function(req, res) {
  res.render('resume');
});

app.get('/project/:id', function(req, res) {
  res.render('project', {project: projects[req.params.id]});
});

app.post('/contact', function(req, res) {
	let data = {
		from: 'kacysommers@gmail.com',
		to: 'kacysommers@gmail.com',
		subject: 'Hey bud, someone\'s trying to get ahold of you!',
		html: `<h1>They're name is ${req.body.name}.</h1><h3>They work for ${req.body.company}.</h3><p>They said: <br /> ${req.body.message}.</p><p>You can get back to them at ${req.body.email}.`
	}

	mailgun.messages().send(data, function(err, info) {
		if (err) {
			console.log('UH OH', err);
		}
		else {
			console.log('Email Sent', info.response);
		}
	});

	res.redirect('/');
});

