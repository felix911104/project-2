require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");
var passport = require("./config/passport");
//JESS/////////////////////////////////////////////////////////////
// var passport = require("passport");
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
// var keys = require('./config/keys')

// passport.use(new GoogleStrategy({
//   clientID: keys.googleAuthClientID,
//   clientSecret: keys.googleAuthSecret,
//   callbackURL: '/auth/google/callback'
// }, (accessToken, refreshToken, profile, done) => {
//   console.log(accessToken)
//   console.log(refreshToken)
//   console.log(profile)
// }))

// var app = express();

// app.get('/auth/google', passport.authenticate('google',{
//     scope: ['profile', 'email']
// }))

// app.get('/auth/google/callback', passport.authenticate('google'))


var PORT = process.env.PORT || 3000;
var db = require("./models");
//JESS Middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//JESS We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
