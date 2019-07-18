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

  app.get("/news", function (req, res) {

    res.render("news");
  });

  app.get("/contact", function (req, res) {

    res.render("contact");
  });

  app.get("/example", function (req, res) {

    res.render("example");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};