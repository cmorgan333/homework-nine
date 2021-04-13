import * as MODEL from "../model/model.js";

function init() {
  $("nav a").click(function (event) {
    let btnId = this.id;
    let contentID = btnId + "Content";

    MODEL.getPageContent(contentID);
  });
}

// this checks for all the elements to be ready by the browser

$(document).ready(function () {
  init();
});
