require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");
var passport = require("./config/passport");
//////JESSS/////
var mysql = require("mysql");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

//passport shiet
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");
///////JESS///////
var connection= mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "PASSWORD",
  database: "user_event_db"
});
connection.connect(function(err){
  if (err) {
    console.error("error connecting:" + err.stack);
    return;
  }
  
  console.log("connected as id" + connection.threadId);
});
//use handlebars to render the eventlist page with the plans in it
app.get("/event", function(req, res){
  connection.query("SELECT * FROM events;", function(err, data){
    if (err) {
      return res.status(500).end();
    }

    res.render("index", {events: data});
  });
});

//create a new event
app.post("/api/events", function(req, res){
  connection.query("INSERT INTO events (networkingEvent) VALUES (?)", [req.body.plan], function(err, result){
    if (err) {
      return res.status(500).end();
    }

    res.json({id: result.insertId});
    console.log({id: result.insertId});
  });
});
//////JESSS upward/////

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
