$(document).ready(function () {
  $('#load-text').load('http://numbersapi.com/1/30/date?json', function(responseText, statusText, xhr) {
    if (statusText == "error") {
      $('#load-text').text("Error loading text: " + xhr.status + " " + xhr.statusText);
    } else {
      $('#load-text').text(responseText);
    }
  });
});