
$(document).ready(function () {
  // Getting references to our form and inputs
  var eventForm = $("form.event");
  var eventName = $("input#name");
  var company = $("input#company");
  var location = $("input#location");
  var start = $("input#start");
  var end = $("input#end");
  var email = $("input#email");

  // When the form is submitted, we validate there's an email and password entered
  eventForm.on("submit", function (event) {
    event.preventDefault();
    var eventData = {
      eventName: eventName.val().trim(),
      company: company.val().trim(),
      eventStart: start.val().trim(),
      eventEnd: end.val().trim(),
      location: location.val().trim(),
      email: email.val().trim()
    };
    console.log(eventData);
    // if (!eventData.email || !eventData.password) {
    //   return;
    // }

    // If we have an email and password we run the loginUser function and clear the form
    createEvent(eventData.eventName, eventData.company, eventData.eventStart, eventData.eventEnd, eventData.location, eventData.email);
    eventName.val("");
    company.val("");
    start.val("");
    end.val("");
    location.val("");
    email.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function createEvent(name, company, start, end, location, email) {
    console.log(name, company, "inside create event function");
    $.post("/api/create", {
      name: name,
      company: company,
      start: start,
      end: end,
      location: location,
      email: email
    })
      .then(function () {
        console.log("hi, how are you today... create.js");
        window.location.replace("/events");
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});

