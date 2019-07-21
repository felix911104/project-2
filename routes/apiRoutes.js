var db = require("../models");
var faker = require("faker");
var passport = require("../config/passport");
var groups = [];

for (let i = 0; i < 24; i++) {
  groups.push(
    {
      Eventid: 1,
      eventName: "Bellevue Coders",
      eventDate: "7/20/2019",
      userid: faker.internet.email(),
      surveyAns: faker.random.number({min: 1,max: 4}),
      location: "Lucky Strike, Bellevue"
    }
  )
}

var blueGroup = [];
var greenGroup = [];
var redGroup = [];
var purpleGroup = [];

for (var i=0; i<groups.length; i++){

  var surveyResponse = (groups[i].surveyAns);
  //console.log(surveyResponse);
  switch(surveyResponse){

    case 1:
      //console.log("Blue Group")
      blueGroup.push(groups[i]);
     // console.log(blueGroup[0]);
    break;
    case 2:
     // console.log("green Group")
      greenGroup.push(groups[i]);
     // console.log(greenGroup[0]);
      break;
    case 3:
     // console.log("Red Group")
      redGroup.push(groups[i]);
      //console.log(redGroup[0]);
      break;
    case 4:
     // console.log("Purple Group")
      purpleGroup.push(groups[i]);
      //console.log(purpleGroup[0]);
      break;
    
    }
  }


module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });
  // joining the two tables answers and events by userId. Provides a link to the API that will give individual survey results based on userid-MH
  app.get('/api/testanswers/:userid',function(req,res){
    db.User.findOne({
      where:{
        id:req.params.userid
      },
      include:[db.Answer,{
        model:db.Event,
        as: "Peoples"
      }]
    }).then(user=>{
      res.json(user)
    })
  })
// Creates a list of what groups the attendees belong to based on their survey answers-MH
  app.get('/api/eventGroups',function(req,res){
    //for demonstration purposes, I'm using a local array to populate the newtworking groups-MH
   
    
    res.json(
      {
        blue: blueGroup,
        green: greenGroup,
        red: redGroup,
        purple: purpleGroup
      }
      )

    //Currently working to make this sequelize code pull information from the database. 
    // db.Event.findAll({
    //   where:{
    //     id:req.params.eventid // the event id is capitalized in the db, but maybe needs to be lower case based on model??? i dunno
    //   },
    //   include:[db.Answers,{
    //     model:db.User,
    //     as: "Networks"
    //   }]
    // }).then(event=>{
    //   res.json(event)
    // })
  })

  // joining the answers and events table. Creating a route to the api that provides the users answers to the survey questions MH
  app.get('/api/testanswers',function(req,res){
    db.User.findAll({
    
      include:[db.Answer,{
        model:db.Event,
        as: "Peoples"
        
      }]
    }).then(user=>{
    
      res.json(user)
      
    })
  })
  //create user
  app.post("/api/login/new", (req, res) => {

    db.User.create({
      email: req.body.email, 
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "api/login/new");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  //Event API Route provides list of all events. Listed ascending eventStart order-MH
    app.get("/api/events/", function(req, res) {
      db.Event.findAll({
        order:[
          ['eventStart']
        ],
      }).then(function(dbEvent){
        
        res.json(dbEvent)
      });
  });
  // EVENT API that orders the list of events by name-MH
  app.get("/api/events/name", function(req, res) {
    db.Event.findAll({
      order:[
        ['eventName']
      ],
    }).then(function(dbEvent){
      
      res.json(dbEvent)
      console.log(dbEvent)
    });

});

  // EVENT API that orders the list of events by location-MH
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
