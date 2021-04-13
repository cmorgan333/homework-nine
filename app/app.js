import * as MODEL from "../model/model.js";


This is a click listener

function init() {
  $("nav a").click(function (event) {
    let btnId = this.id;
    let contentID = btnId + "Content";

    MODEL.getPageContent(contentID);

    $("#app").html(eval(contentID));
  });
}

// this checks for all the elements to be ready by the browser

$(document).ready(function () {
  init();
});


