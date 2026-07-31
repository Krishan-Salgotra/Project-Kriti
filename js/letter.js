/* ==========================================
   PROJECT KRITI
   LETTER.JS
========================================== */

const envelope =
document.getElementById("envelope");

const letterContainer =
document.getElementById("letterContainer");

const letterText =
document.getElementById("letterText");

const continueBox =
document.getElementById("continueBox");

/* ==========================================
   LETTER CONTENT
========================================== */

const message = `

Sometimes I wonder how someone could become
such an important part of my life without me
even realizing when it happened.

You slowly became my comfort,
my happiness,
my favorite notification,
and the first person I want to tell everything to.

Imagine a boy who starts ignoring every girl
just because he's completely obsessed with you...

That's me for you. ❤️

Every memory we've made,
every laugh we've shared,
every little conversation...
has become something I'll always treasure.

Thank you
for being you.

No matter what tomorrow brings,

I'll always choose you.

Again.

And again.

❤️

`;

/* ==========================================
   TYPEWRITER
========================================== */

let index = 0;

function typeLetter(){

    if(index >= message.length){

        continueBox.classList.add("show");

        return;

    }

    letterText.innerHTML += message[index];

    index++;

    setTimeout(typeLetter,35);

}

/* ==========================================
   OPEN LETTER
========================================== */

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        letterContainer.classList.add("show");

        envelope.style.pointerEvents="none";

        typeLetter();

    },700);

});