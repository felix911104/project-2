var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.post("/api/login", isAuthenticated, function (req, res) {
    res.json(req.user);
  });

  //create user
  app.post("/api/signup", (req, res) => {
    console.log(req.body, "api sign up");
    db.User.create({
      email: req.body.email, 
      password: req.body.password
    })
      .then(function () {
        console.log("why no redirect! apiRoutes.js");
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        console.log(err, "what is err");
        res.status(401).json(err);
      });
  });

  //Event API Route provides list of all events. Listed ascending eventStart order
    app.get("/api/events/", function(req, res) {
      db.Event.findAll({
        order:[
          ['eventStart']
        ],
      }).then(function(dbEvent){
        
        res.json(dbEvent)
      });
  });
  // EVENT API that orders the list of events by name
  app.get("/api/events/name", function(req, res) {
    db.Event.findAll({
      order:[
        ['eventName']
      ],
    }).then(function(dbEvent){
      
      res.json(dbEvent)
    });

});

  // EVENT API that orders the list of events by location
  app.get("/api/events/location", function(req, res) {
    db.Event.findAll({
      order:[
        ['location']
      ],
    }).then(function(dbEvent){
      
      res.json(dbEvent)
    });

});
  
// Working Event API Route provides list of all events
  //   app.get("/api/events", function(req, res) {
  //     db.Event.findAll({}).then(function(dbEvent){
  //       res.json(dbEvent)
  //     });
  
  // });



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
  // app.get("/login", (req, res) => {
  //   db.User.findAll({}).then(result => {
  //     console.log(result);
  //     res.json(result);
  //   })
  // });

  //create groups add the total value of the answer and compare that to all the users surveys
  app.get("/manager", (req, res) => {
    db.Answer.findAll({}).then(result => {
      console.log(result.length);
    })
  })

  //event creation
  app.post("/host", (req, res) => {
    db.Event.create({
      eventName: req.body.name,
      eventStart: req.body.start,
      eventEnd: req.body.end,
      address: req.body.address,
      location: req.body.location
    }).then(result => {
      console.log("event created");
    })
  })

  //testing to see whats in the database
  app.get("/api/user", (req,res) => {
    db.User.findAll({}).then(result => {
      res.json(result);
    })
  })

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
