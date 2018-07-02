// Business Logic and User Logic

var userInput;
userInput = parseInt(userInput);
$(document).ready(function() {
  $("#pingPong-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#number-input").val());
    for (var generatedNumbers = 1; generatedNumbers <= userInput; generatedNumbers++) {
      if (generatedNumbers % 3 === 0) {
        $("#generatedNumbers").append("<li>Ping</li>")
        $(#generatedNumbers).empty();
      } else if (generatedNumbers % 5 === 0) {
        $("#generatedNumbers").append("<li>Pong</li>")
      } else if (generatedNumbers % 15 === 0) {
        $("#generatedNumbers").append("<li>PingPong</li>")
      } else {
        $("#generatedNumbers").append("<li> " + generatedNumbers + " </li>")
      }
      $("#number-input").val("")
    }

  })

})
