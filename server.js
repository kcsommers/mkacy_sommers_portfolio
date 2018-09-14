require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;
const skills = require('./skills');
const projects = require('./projects.js');
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

