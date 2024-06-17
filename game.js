var gamePattern=[];
var level=0;
var clk=0;
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
function nextSequence(){
    clk=0;
    randomNumber=Math.random();
    randomNumber=4*randomNumber;
    randomNumber=Math.floor(randomNumber);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(50).fadeIn(50);
    playsound(randomChosenColour);
    $("h1").text("level "+level);
    level++;
}
function playsound(name)
{
    var audio=new Audio("./sounds/"+name+".mp3");
    audio.play();
}
$(".btn").click(function(event){
    var userChosenColour=event.currentTarget.classList[1];
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(clk);
    clk++;
});

$(document).keypress(function(){
    $(document).off();
    nextSequence();
}); 

function startover()
{
    level=0;
    gamePattern=[];
    click=0;
    userClickedPattern=[];
    setTimeout(function(){
        $("body").RemoveClass("game-over");
    },100);
}
function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}
function checkAnswer(currentLevel)
{
    console.log(gamePattern[currentLevel]);
    console.log(userClickedPattern[currentLevel]);
    if(gamePattern[currentLevel]==userClickedPattern[currentLevel])
    {
        if(level-1===currentLevel)
        {
            userClickedPattern=[];
            console.log("a");
            setTimeout(function()
            {
                nextSequence();
            },1000);
        }
    }
    else
    {
        var au=new Audio("./sounds/wrong.mp3");
        au.play();
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
        
        $(document).keypress(function(){
            $(document).off();
            nextSequence();
        });
        
        startover();
    }

}
