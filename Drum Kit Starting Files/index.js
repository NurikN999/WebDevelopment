listOfButtons = document.querySelectorAll(".drum");
document.addEventListener("keydown", (event) => {
        makeSound(event.key);
        buttonAnimation(event.key);
    }
);

function playSound(audio){
    audio = new Audio(audio);
    audio.play();
}

function makeSound(key){
    switch (key){
        case 'w':
            console.log("w was clicked");
            playSound('sounds/crash.mp3');
            break;
        case 'a':
            console.log('a was clicked');
            playSound('sounds/kick-bass.mp3')
            break;
        case 's':
            console.log('s was clicked');
            playSound('sounds/snare.mp3');
            break;
        case 'd':
            console.log('d was clicked');
            playSound('sounds/tom-1.mp3')
            break;
        case 'j':
            console.log('j was clicked');
            playSound('sounds/tom-2.mp3')
            break;
        case 'k':
            console.log('k was clicked');
            playSound('sounds/tom-3.mp3');
            break;
        case 'l':
            console.log('l was clicked');
            playSound('sounds/tom-4.mp3');
            break;
        default:
            console.error("Unknown Error");
    }
}

function buttonAnimation(key){
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}