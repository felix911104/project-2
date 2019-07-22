$(document).ready(() => {

  getGroups();

})

function getGroups(){

  $.get("/api")

}