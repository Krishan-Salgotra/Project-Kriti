// ==========================================
// PROJECT KRITI
// PROMISE PAGE
// ==========================================

const promises = document.querySelectorAll(".promise");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const hearts = document.getElementById("hearts");
const stars = document.querySelector(".stars");

let current = 0;

// ==========================================
// CREATE STARS
// ==========================================

for(let i=0;i<220;i++){

    const star=document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*4+"s";

    star.style.animationDuration=(2+Math.random()*3)+"s";

    stars.appendChild(star);

}

// ==========================================
// CREATE HEARTS
// ==========================================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(14+Math.random()*18)+"px";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,700);

// ==========================================
// NEXT BUTTON
// ==========================================

nextBtn.addEventListener("click",()=>{

    promises[current].classList.remove("active");

    current++;

    if(current>=promises.length){

        current=promises.length-1;

    }

    promises[current].classList.add("active");

    if(current===promises.length-1){

        nextBtn.style.display="none";

        finishBtn.style.display="inline-block";

    }

});

// ==========================================
// FINAL ENDING
// ==========================================

finishBtn.addEventListener("click",()=>{

    document.body.innerHTML=`

    <div class="final-screen">

        <div class="ring-glow">

            💍

        </div>

        <h1>

            Just The Beginning...

        </h1>

        <p>

            Every promise you just read

            wasn't written to impress you.

            <br><br>

            It was written because

            that's exactly

            how I feel.

        </p>

        <h2>

            Thank you...

        </h2>

        <h3>

            For being my favorite person.

            ❤️

        </h3>

    </div>

    `;

    createPetals();

});

// ==========================================
// PETALS
// ==========================================

function createPetals(){

    for(let i=0;i<80;i++){

        const petal=document.createElement("div");

        petal.className="petal";

        petal.innerHTML="🌸";

        petal.style.left=Math.random()*100+"vw";

        petal.style.animationDelay=Math.random()*4+"s";

        petal.style.fontSize=(18+Math.random()*18)+"px";

        document.body.appendChild(petal);

    }

}