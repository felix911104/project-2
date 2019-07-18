var db = require("../models");

module.exports = function(app) {

  //create user
  app.post("/login/new", (req, res) => {

    console.log(req.body.name, req.body.pass);

    db.User.create({
      name: req.body.name, 
      pass: req.body.pass
    }).then(result => {
      console.log("created user");
      res.json(result);
      res.redirect(307, "/login");
    })
  })

  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  //get all users need to rework later
  app.get("/login", (req, res) => {
    db.User.findAll({}).then(result => {
      console.log(result);
      res.json(result);
    })
  });

  //create groups
  app.post("/manager", (req, res) => {
    
  })


  //event creation
  app.post("/host", (req, res) => {
    db.Event.create({
      eventName: req.body.name,
      eventStart: req.body.start,
      eventEnd: req.body.end,
      img: req.body.img,
      address: req.body.address,
      location: req.body.location
    }).then(result => {
      console.log("event created");
    })
  })
};
