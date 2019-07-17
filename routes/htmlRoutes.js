var db = require("../models");

var questions=
  [
    {
      question: "What is your favorite team sport?",
      choiceA: "Football",
      choiceB: "Basketball",
      choiceC: "Soccer",
      choiceD: "Baseball",
      choiceE: "Racquetball",
      choiceF: "I don't follow sports",
      
    },
    
    {
      question: "What is your area of study?",
      choiceA: "Business",
      choiceB: "Engineering",
      choiceC: "Art & Humanities",
      choiceD: "Natural Science",
      choiceE: "Computer Science",
      
    },

    {
      question: "What type of company are you currently, or most recently, employed?",
      choiceA: "Public",
      choiceB: "Private",
      choiceC: "Government",
      choiceD: "NGO",
    },

    {
      question: "What is your area of expertise?",
      choiceA: "Sales",
      choiceB: "Operations",
      choiceC: "IT",
      choiceD: "Engineering",
      choiceE: "Research and Development",
      choiceF: "Human Resources",  
    },

    {
      question: "Are you a military veteran?",
      choiceA: "No",
      choiceB: "Yes", 
    },

    {
      question: "Where were you raised?",
      choiceA: "Washington State",
      choiceB: "Western US",
      choiceC: "Midwest",
      choiceD: "Southern US",
      choiceE: "Eastern US",
      choiceF: "Outsdie the Continental US",
    },

    {
      question: "How long have you lived in the Seattle area?",
      choiceA: "Less than a year",
      choiceB: "1-5 years",
      choiceC: "Over 5 years", 
    },
    
    {
      question: "Do you consider yourself an introver or an extrover?",
      choiceA: "Introvert",
      choiceB: "Extrovert",   
    },
    
    {
      question: "How do you commut?",
      choiceA: "Drive",
      choiceB: "Carpool",
      choiceC: "Mass Transit",
      choiceD: "Bike",
      choiceE: "Walk", 
    }
  ];
  
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  });

  app.get("/login/new", (req, res) => {
    res.render("index");
  
  })


  // Load example page and pass in an example by id
  app.get("/survey", function(req, res) {
    
      res.render("survey", {
        // question: getBanks()
        question: questions
      
      });
     // console.log(survey);
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
