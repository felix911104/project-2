
$(document).ready(function (){


  getEvents();

  // console.log(events, "hello there");
})


function getEvents(){
  $.get("/api/events/name", (req, res) => {
    console.log(req,"event-list.js");

    var newDiv = $("<div>");
    
    for(var i = 0; i < req.length; i++){
      var divOne = $("<div>");
      divOne.attr({
      class:"col-12 border-top border-bottom py-5",
      "data-aos":"fade",
      "data-aos-delay":"200"
      });

      var divTwo = $("<div>");
      divTwo.attr({
        class: "row align-items-stretch"
      });

      var divThree = $("<div>");
      divThree.attr({
        class:"col-md-3 text-white mb-3 mb-md-0"
      });

      var spanOne = $("<span>");
      spanOne.text(req[i].eventStart);

      var divFour = $("<div>");
      divFour.attr({
      class: "col-md-9"
      });

      var h2One = $("<h2>");
      h2One.attr({
        class: "text-white",
        eventID: req[i].id
      });
      h2One.text(req[i].eventName);

      var spanTwo = $("<span>");
      spanTwo.text(req[i].eventEnd);

      divOne.append(divTwo);
      divTwo.append(divThree);
      divThree.append(spanOne);
      divTwo.append(divFour);
      divFour.append(h2One);
      divFour.append(spanTwo);

      $("#list").append(divOne);

    }

    // return eventObject;
    // res.render("/events", eventObject);
  })
}