var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    // db.Example.findAll({}).then(function (dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/about", function (req, res) {

    res.render("about");
  });

  app.get("/events", function (req, res) {

    res.render("events");
  });

  app.get("/groups", function (req, res) {

    res.render("groups");
  });

  app.get("/contact", function (req, res) {

    res.render("contact");
  });

  app.get("/login", function (req, res) {

    res.render("login");
  });

  app.get("/create", function (req, res) {

    res.render("create");
  });

  app.get("/survey", function (req, res) {

    res.render("survey");
  });

  app.get("/signup", function (req, res) {

    res.render("signup");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};