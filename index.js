var arr=["green","red","yellow","blue"];
var seq=[];
var seqcount=0;
var lvl=0;
gamestarted=0;
var userseq=[];


$(document).on("keydown",function(){
    if(gamestarted==0){
    sequence();
    gamestarted=1;
}
})
$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");
    userseq.push(userChosenColour);

    playSound(userChosenColour);
    animation(userChosenColour);
    checkequal(userseq.length-1);
})


function checkequal(n){
    if(userseq[n]==seq[n]){
        if(userseq.length==seq.length){
            userseq=[];
            setTimeout(function(){
                sequence();},1000);
        }
    }
    else{
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 100);
        playSound("wrong");
        gameover();
    }
}



function sequence(){
    lvl++;
    $("#level-title").text("Level "+lvl);
    let n=Math.random();
    n=n*4;
    n=Math.floor(n);
    let chosen=arr[n];
    seq.push(chosen);
    $("#"+chosen).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(chosen);
}



function animation(tag){
    $("#"+tag).addClass("pressed");
    setTimeout(function () {
        $("#" + tag).removeClass("pressed");
      }, 100);
}

function playSound(color){
    var song=new Audio("sounds/"+color+".mp3");
    song.play();
}

function gameover(){
    $("#level-title").text("Press any key to start");
    seq=[];
    lvl=0;
    gamestarted=0;
}