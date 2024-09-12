var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;

var started = false;

$(document).on("keypress", function()
{
    if(!started)
    {
    $("h1").text("level "  + level);
    nextSequence();
    started = true;
    }
})

$(".btn").on("click", function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    //playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    
})



function nextSequence()
{
    userClickedPattern = [];
    level = level + 1;
    $("h1").text("level "  + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    //var audio = new Audio("sounds/" + buttonColours[randomNumber] + ".mp3")
    //audio.play();
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    //playSound(randomChosenColour);
    

}

function playSound(name)
{   
    var audio = new Audio("sounds/" + userChosenColour + ".mp3")
    audio.play();

}

function animatePress(colour)
{
    
    $("."+colour).addClass("pressed")

    setTimeout(function() {
        $("."+colour).removeClass("pressed");
      }, 100);

}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } 
    else {
      //playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

function startOver()
{
    started = false;
    gamePattern = [];
    level = 0;
}