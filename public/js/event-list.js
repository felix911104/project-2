
$(document).ready(function (){


  events = getEvents();

  console.log(events);
})


function getEvents(){
  $.get("/api/events/name", (req, res, cb) => {
    console.log(req,"event-list.js");

    var eventObject = {
      event: req
    }

    return eventObject;
    // res.render("events", eventObject);
  })
}