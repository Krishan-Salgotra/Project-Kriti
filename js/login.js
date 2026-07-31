const PASSWORD = "020726";

const input = document.getElementById("password");
const button = document.getElementById("unlockButton");
const message = document.getElementById("message");
const card = document.getElementById("loginCard");

const wrongMessages = [

"That's not the beginning of our story 💜",

"Hmm... try the day everything started ❤️",

"Close... but not our special date ✨",

"Think back to our first day together 🌸"

];

button.addEventListener("click", checkPassword);

input.addEventListener("keypress", function(e){

if(e.key==="Enter"){

checkPassword();

}

});

function checkPassword(){

if(input.value===PASSWORD){

    message.style.color="#7CFFAE";

    message.innerHTML="Access Granted ❤️";

    card.classList.add("success");

    // Start music with fade in
    startMusic();

    // Small delay for a cinematic feel
    setTimeout(()=>{

        goToPage("home.html");

    },1800);

}

else{

card.classList.remove("shake");

void card.offsetWidth;

card.classList.add("shake");

message.style.color="#FF8DAA";

message.innerHTML=wrongMessages[Math.floor(Math.random()*wrongMessages.length)];

}

}