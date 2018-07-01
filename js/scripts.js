//Business Logic
// var generatedNumbers;
//
// function pingPong() {
//   for (generatedNumbers = 1; generatedNumbers <= userInput; generatedNumbers++;) {
//     if (generatedNumbers % 3 === 0) {
//       //Push to ul list by printing Ping
//       return "Ping"
//     } else if (generatedNumbers % 5 === 0) {
//       //Push to ul list by printing Ping
//       return "Pong"
//     } else if (generatedNumbers % 15 === 0) {
//       //Push to ul list by printing PingPong
//       return "PingPong"
//     } else {
//       //Push to UL List the number in ordered List
//       return generatedNumbers;
//     }
//   }
// }



//User Logic
// var userInput;
// userInput = parseInt(userInput);
// $(document).ready(function() {
//       $("pingPong-form").submit(function(event) {
//           event.preventDefault();
//           userInput = $("#number-input").val()
//           $("#generatedNumbers").append("<li>" + generatedNumbers + "</li>")
//           $("#number-input").val("")
//         }
//
//       })




// var userInput;
// userInput = parseInt(userInput);
$(document).ready(function() {
      $("pingPong-form").submit(function(event) {
          event.preventDefault();
          var userInput = parseInt($("#number-input").val());
          for (var generatedNumbers = 1; generatedNumbers <= userInput; generatedNumbers++) {
            if (generatedNumbers%3 === 0) {
              // $("#generatedNumbers").append("<li>Ping</li>")
              console.log("Ping");
            } else if (generatedNumbers%5 === 0) {
              // $("#generatedNumbers").append("<li>Pong</li>")
              console.log("Pong");
            } else if (generatedNumbers%15 === 0) {
              // $("#generatedNumbers").append("<li>PingPong</li>")
              console.log("PingPong");
            } else {
              // $("#generatedNumbers").append("<li> " + generatedNumbers + " </li>")
              console.log(generatedNumbers);
            }
            $("#number-input").val("")
          }
        })
      })
