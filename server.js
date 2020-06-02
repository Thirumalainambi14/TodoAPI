const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  routes = require('./api/routes/todoListRoutes'),
  seed = require('./api/seed');


mongoose.connect('mongodb://localhost/tododb', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// seed();

routes(app);

app.listen(port);


app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});
console.log('Todo RESTful API has started on port ' + port);