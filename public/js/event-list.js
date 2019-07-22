
$(document).ready(function (){


  getEvents();

  // console.log(events, "hello there");
})


function getEvents(){
  $.get("/api/events/name", (req, res) => {
    console.log(req,"event-list.js");

    for(var i = 0; i < req.length; i++){
      var divOne = $("<div>");
      divOne.attr({
      class:"col-12 border-top border-bottom py-5",
      "data-aos":"fade",
      "data-aos-delay":"300"
      });

      var divTwo = $("<div>");
      divTwo.attr({
        class: "row align-items-stretch"
      });

      var divThree = $("<div>");
      divThree.attr({
        class:"col-md-4 text-white mb-3 mb-md-0"
      });

      var spanOne = $("<span>");
      spanOne.text(req[i].eventStart);

      var divFour = $("<div>");
      divFour.attr({
        class: "col-md-4 text-white mb-3 mb-md-0"
      });

      var aOne = $("<a>");
      aOne.attr({
        href: "/survey"
      });

      var spanTwo = $("<span>");
      spanTwo.attr({
        class: "h6",
        eventID: req[i].id
      });
      spanTwo.text(req[i].eventName);

      var divFive = $("<div>");
      divFive.attr({
        class: "col-md-4 text-white mb-3 mb-md-0"
      });

      var spanThree = $("<span>");
      spanThree.attr({
        class: "h6"
      });
      spanThree.text(req[i].location);

      divOne.append(divTwo);
      divTwo.append(divThree);
      divThree.append(spanOne);
      divTwo.append(divFour);
      divFour.append(aOne);
      aOne.append(spanTwo);
      divTwo.append(divFive);
      divFive.append(spanThree);

      $("#list").append(divOne);

    }

    // return eventObject;
    // res.render("/events", eventObject);
  })
}