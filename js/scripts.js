//Business Logic
function pingPong() {
  for (var generatedNumbers = 1; generatedNumbers <= userInput; generatedNumbers++;) {
    if (generatedNumbers % 3 === 0) {
      //Push to ul list by printing Ping
    } else if (generatedNumbers % 5 === 0) {
      //Push to ul list by printing Ping
    } else if (generatedNumbers % 15 === 0) {
      //Push to ul list by printing PingPong
    } else {
      //Push to UL List the number in ordered List
    }
  }
}



//User Logic
var userInput;
$(document).ready(function() {
      $("pingPong-form").submit(function(event) {
          event.preventDefault();
          userInput = $("#text-input").val()
          $("#generatedNumbers").append("<li>" + generatedNumbers + "</li>")
          $("#number-input").val("")
        }

      })
