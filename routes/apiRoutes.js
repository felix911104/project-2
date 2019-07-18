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
    })
  })

  //Event API Route
    app.get("/api/events", function(req, res) {
      db.Event.findAll({}).then(function(dbEvent){
        res.json(dbEvent)
      });
      // user_event_db.events.findAll({}).then(function() {
      // res.json("I see you");
    // });
  });
  
  
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
};
