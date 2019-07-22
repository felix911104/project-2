var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {

    res.render("index");
  });


  app.get("/about", function (req, res) {

    res.render("about");
  });

  //TODO: add isAuthenticated
<<<<<<< HEAD
  app.get("/events",  function (req, res) {
=======
  app.get("/events", function (req, res) {
>>>>>>> 579947859c3c0410334f033802226607f19010bb

    res.render("events");
  });

  //TODO: isAuthenticated
<<<<<<< HEAD
  app.get("/groups",  function (req, res) {
=======
  app.get("/groups", function (req, res) {
>>>>>>> 579947859c3c0410334f033802226607f19010bb

    res.render("groups");
  });

  app.get("/contact", function (req, res) {

    res.render("contact");
  });

  app.get("/login", function (req, res) {

    if (req.user) {
      res.redirect("/events");
    }
    res.render("login");
  });

  app.get("/create", function (req, res) {

    res.render("create");
  });

  //TODO: add isAuthenticated

<<<<<<< HEAD
  app.get("/survey",  function (req, res) {
=======
  app.get("/survey", function (req, res) {
>>>>>>> 579947859c3c0410334f033802226607f19010bb

    res.render("survey");
  });

  app.get("/signup", function (req, res) {

    if (req.user) {
      console.log("hello....!, htmlRoutes.js");
      res.render("index");
    }else {
    res.render("signup");
    }
    });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
