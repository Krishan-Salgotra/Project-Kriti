/* ==========================================
   PROJECT KRITI
   TRUTH.JS
========================================== */

const truthText =
document.getElementById("truthText");

const continueBox =
document.getElementById("continueBox");

/* ==========================================
   LINES
========================================== */

const lines = [

"There is something...",

"I've never really said.",

"",

"Sometimes...",

"I wonder...",

"",

"How someone",

"I once didn't know...",

"",

"became",

"the first person",

"I want to tell",

"everything to.",

"",

"I don't know",

"what tomorrow",

"looks like.",

"",

"But...",

"I know",

"my favorite part",

"of today...",

"is you.",

"",

"Imagine...",

"a boy...",

"who stopped looking",

"for anyone else...",

"",

"because",

"somewhere",

"along the way...",

"",

"he found",

"everything",

"he was looking for...",

"",

"in you.",

"",

'<span class="highlight">That\'s me.</span>',

'<span class="highlight">For you. ❤️</span>',

"",

"— Krish"

];

let current = 0;

/* ==========================================
   SHOW NEXT LINE
========================================== */

function showNextLine(){

    if(current >= lines.length){

        continueBox.classList.add("show");

        return;

    }

    const line = document.createElement("div");

    line.innerHTML = lines[current];

    line.style.opacity = "0";

    line.style.transform = "translateY(20px)";

    line.style.transition =
        "all .9s ease";

    truthText.appendChild(line);

    truthText.classList.add("show");

    requestAnimationFrame(()=>{

        line.style.opacity = "1";

        line.style.transform =
        "translateY(0)";

    });

    current++;

    let delay = 900;

if(
    lines[current-1].includes("Imagine") ||
    lines[current-1].includes("today") ||
    lines[current-1].includes("you.") ||
    lines[current-1].includes("me.")
){
    delay = 1800;
}

    if(lines[current-1] === ""){

        delay = 600;

    }

    if(lines[current-1].includes("highlight")){

        delay = 1800;

    }

    setTimeout(showNextLine, delay);

}

window.onload = showNextLine;

/* ==========================================
   FINAL EFFECT
========================================== */

function celebrateTruth(){

    document.querySelector(".aurora").style.filter =
    "blur(120px) brightness(1.3)";

}

setTimeout(celebrateTruth,18000);