const hero = document.querySelector(".hero");
const storyText = document.getElementById("storyText");
const continueBox = document.getElementById("continueBox");
const scrollIndicator = document.getElementById("scrollIndicator");

const scenes = [
    "Hi Kriti.",
    "There's something...<br><br>I've wanted to give you.",
    "Since words weren't enough...<br><br>I built this."
];

let currentScene = -1;

function showScene(index){

    storyText.classList.remove("active");

    setTimeout(() => {

        storyText.innerHTML = scenes[index];

        storyText.classList.add("active");

    }, 300);

}

function updateHero(){

    const maxScroll = hero.offsetHeight - window.innerHeight;

    const progress = Math.min(window.scrollY / maxScroll, 1);

    let scene;

    if(progress < 0.33){

        scene = 0;

    }
    else if(progress < 0.66){

        scene = 1;

    }
    else{

        scene = 2;

    }

    if(scene !== currentScene){

        currentScene = scene;

        showScene(scene);

    }

    if(scene === 2 && progress > 0.82){

        continueBox.classList.add("show");

    }
    else{

        continueBox.classList.remove("show");

    }

    scrollIndicator.style.opacity =
        progress < 0.08 ? ".8" : "0";

}

window.addEventListener("scroll", updateHero);

updateHero();