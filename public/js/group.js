var groupObject = {};

var blueGroup = [];
var greenGroup = [];
var redGroup = [];
var purpleGroup = [];
var salmonGroup = [];
var orangeGroup = [];


$(document).ready(() => {

  // getGroups();

  getTestData();

})

// function getGroups(){

//   $.get("/api/answers", (req, res) => {
//     console.log(req);

//     var surveySize = req.length - 1;
//     var newNew = 0;

//     if(surveySize <= 10){
//       newNew = surveySize / 2;
//       makeGroup(newNew, surveySize);
//     } else if (surveySize > 10 && surveySize <= 20){
//       newNew = surveySize / 4;
//       makeGroup(newNew, surveySize);
//     } else if (surveySize > 20 && surveySize <= 30){
//       newNew = surveySize / 6;
//       makeGroup(newNew, surveySize);
//     } else if (surveySize > 30 && surveySize <= 40){
//       newNew = surveySize / 4;
//       makeGroup(newNew, surveySize);
//     } else if (surveySize > 40 && surveySize <= 50){
//       newNew = surveySize / 5;
//       makeGroup(newNew, surveySize);
//     }
//   })

// }

// function makeGroup(groupSize, size){
//   var previousCompatability = 0;

//   for (var i = 0; i < size; i++) {
//     var compatability = 0;
//     var user = 0;
//     var firstUser = req[i];

//     for (var j = 1; j < size; j++) {
//       var secondUser = req[j];

//       if(firstUser.a1 === secondUser.a1){
//         compatability++;
//       }
//       if (firstUser.a2 === secondUser.a2) {
//         compatability++;
//       }
//       if (firstUser.a3 === secondUser.a3) {
//         compatability++;
//       }
//       if (firstUser.a4 === secondUser.a4) {
//         compatability++;
//       }
//       if (firstUser.a5 === secondUser.a5) {
//         compatability++;
//       }
//       if (firstUser.a6 === secondUser.a6) {
//         compatability++;
//       }
//       if (firstUser.a7 === secondUser.a7) {
//         compatability++;
//       }
//       if (firstUser.a8 === secondUser.a8) {
//         compatability++;
//       }
//       if (firstUser.a9 === secondUser.a9) {
//         compatability++;
//       }
//       if (firstUser.a10 === secondUser.a10) {
//         compatability++;
//       }

//     }
//   }
// }


function getTestData(){
  $.get("/api/eventgroups", (req, res) => {
    

    for (var i = 0; i < req.blue.length; i++){
      var divBlue = $("<div>");
      var spanOne = $("<div>");
      spanOne.text(req.blue[i].userid);

      divBlue.append(spanOne);

      blueGroup.push(req.blue[i].userid);
      console.log(blueGroup, "blue");

      $("#blue").append(divBlue);
    }

    for (var i = 0; i < req.green.length; i++) {
      var divGreen = $("<div>");
      var spanOne = $("<div>");
      spanOne.text(req.green[i].userid);

      divGreen.append(spanOne);

      greenGroup.push(req.green[i].userid);
      console.log(greenGroup, "green");
      $("#green").append(divGreen);

    }
    for (var i = 0; i < req.red.length; i++) {
      var divRed = $("<div>");
      var spanOne = $("<div>");
      var endDiv = $("<div>");
      spanOne.text(req.red[i].userid);

      divRed.append(spanOne);
      divRed.append(endDiv);

      $("#red").append(divRed);

    }
    for (var i = 0; i < req.purple.length; i++) {
      var divPurple = $("<div>");
      var spanOne = $("<div>");
      spanOne.text(req.purple[i].userid);

      divPurple.append(spanOne);

      $("#purple").append(divPurple);

    }

  })
}