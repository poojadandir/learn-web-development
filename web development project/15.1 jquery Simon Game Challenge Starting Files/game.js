var buttonColours  = ["red", "blue", "green", "yellow"];
var start = false;
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
$(document).keypress(function (event){
  if(!start){
    nextSequence();
    $("#level-title").text("Level "+level);
    start = true;
  }
});

function nextSequence(){
  var randomNumber =  Math.floor(Math.random() * 4);
  var randomChosenColour  = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  animatePress(randomChosenColour);
  level++;
  $("#level-title").text("Level "+level);
}

$(".btn").click(function (){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
  console.log("userClickedPattern "+userClickedPattern);
  console.log("gamePattern "+gamePattern);
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
      if(userClickedPattern.length === gamePattern.length){
        userClickedPattern = [];
        nextSequence();
      }
  }else{
    $("#level-title").text("game-over");
    $("body").addClass("game-over");
    playSound("wrong");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){  $("body").removeClass("game-over");}, 200 );
    startOver();
  }
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){$("#"+currentColour).removeClass("pressed");}, 100);
}

function startOver(){
  start = false;
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
}
