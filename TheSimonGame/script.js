
// $("h1").addClass("bigger-title margin-50");
// // $("h1").text("Another Text");

// let counter = 0;

// $("button").on("click", () => {
//     $("h1").fadeToggle();
// });


// // $("h1").animate({opacity: 0.5});
// // $("h1").animate({margin: "20%"});

// $("h1").text("First One").slideUp(1000).text("Another One").slideDown(1000).animate({margin: "20%"});



// keyList = []
// $("input").keypress(function(event){
//     keyList.push(event.key)
//     $("span").text(keyList.join(''));
// });


$(".red").on("click", () => {
    $(".red").animate({opacity: 0.7}).animate({opacity: 1});
    playSound("red");
});

$(".green").on("click", () => {
    $(".green").animate({opacity:0.7}).animate({opacity:1});
    playSound("green");
});

$(".yellow").on("click", () => {
    $(".yellow").animate({opacity:0.7}).animate({opacity:1});
    playSound("yellow");
});

$(".blue").on("click", () => {
    $(".blue").animate({opacity:0.7}).animate({opacity:1});
    playSound("blue");
});

function playSound(color){
    audio = new Audio('sounds/' + color + '.mp3');
    audio.play();
}