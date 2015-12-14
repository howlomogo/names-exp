var express = require('express');
var cors = require('cors'); // Could change ?
var app = express();

var mongojs = require('mongojs');
var db = mongojs('names', ['users']);
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/monkeys', function (req, res) {
  console.log("I recieved a get request.");
  db.users.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.listen(3000);