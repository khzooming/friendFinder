// Dependencies
// =============================================================
var express = require('express');
var path = require('path');
var serve = require('express-static');
// var serveStatic = require('serve-static');
var similarity = require('compute-cosine-similarity');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use('/static', express.static(path.join(__dirname + 'public')));
// app.use('/static', express.static(path.join(__dirname + 'app/public')));

// THIS APPROACH IS THE THING TO DO, COVERS THE RES.SEND CALLS BELOW LINES 31 TO
app.use(express.static(path.join(__dirname + '/app/public')));
// this approach is a simple way to search through multiple directories.
// Files are looked for in public-optimized/ first, then public/secon as a fallback.
// app.use(serveStatic(path.join(__dirname, 'public-optimized')));
// app.use(serveStatic(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.redirect('/home.html');
});

app.get('/survey', function(req, res) {
  res.redirect('/survey.html');
});

// app.post('/api/friends', function(req, res) {
//   console.log(req.body);
//   var newFriend = req.body;
//   // console.log(newReservation.resName);
//   res.json(newFriend);
//   console.log(newFriend);
// });

var friends = require('./app/data/friends');

app.post('/api/friends', function(req, res) {
  friends.push(req.body);
  res.json(friends);
});

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
