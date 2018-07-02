// Psuedo Code

// at the start of the game, generate a random number.

// each crystal generates a constant number when pressed, but the user does not know what it is.

// each time you click a crysal, its hidden number will be added to you score.

// match the randomly generated score with the 4 crystals and you win, go over the randomly generated number and you lose.
$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var playerScore = 0;
  var randomNumber = Math.floor(Math.random() * 120 + 19);
  var redCrystal = Math.floor(Math.random() * 12 + 1);
  var blueCrystal = Math.floor(Math.random() * 12 + 1);
  var greenCrystal = Math.floor(Math.random() * 12 + 1);
  var yellowCrystal = Math.floor(Math.random() * 12 + 1);
  $("#rndNumber").text(randomNumber);
  $("#wins").text("Wins: " + wins);
  $("#losses").text("Losses: " + losses);

  //Change player score when the red crystal is pressed
  $("#redCrystal").on("click", function() {
    playerScore += redCrystal;
    $("#score").text(playerScore);
  });

  //Change player score when the blue crystal is pressed
  $("#blueCrystal").on("click", function() {
    playerScore += blueCrystal;
    $("#score").text(playerScore);
  });

  //Change player score when the yellow crystal is pressed
  $("#yellowCrystal").on("click", function() {
    playerScore += yellowCrystal;
    $("#score").text(playerScore);
  });

  //Change player score when the green crystal is pressed
  $("#greenCrystal").on("click", function() {
    playerScore += greenCrystal;
    $("#score").text(playerScore);
  });

  $("img").on("click", function() {
    if (playerScore === randomNumber) {
      wins++;
      $("#wins").text("Wins: " + wins);
      playerScore = 0;
      randomNumber = Math.floor(Math.random() * 120 + 19);
      $("#rndNumber").text(randomNumber);
      $("#score").text(playerScore);
    } else if (playerScore > randomNumber) {
      losses++;
      $("#losses").text("Losses: " + losses);
      playerScore = 0;
      randomNumber = Math.floor(Math.random() * 120 + 19);
      $("#rndNumber").text(randomNumber);
      $("#score").text(playerScore);
    }
  });
});
