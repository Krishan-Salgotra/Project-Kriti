/* =====================================================
   PROJECT KRITI
   PREMIUM BACKGROUND ENGINE
===================================================== */

const stars = document.querySelector(".stars");
const heartContainer = document.getElementById("heartParticles");
const sparkleContainer = document.getElementById("sparkles");

// ==========================================
// CREATE STARS
// ==========================================

if(stars){

    for(let i=0;i<220;i++){

        const star=document.createElement("span");

        star.className="star";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.animationDelay=Math.random()*4+"s";

        star.style.animationDuration=(2+Math.random()*3)+"s";

        stars.appendChild(star);

    }

}

// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart(){

    if(!heartContainer) return;

    const heart=document.createElement("div");

    heart.className="floating-heart";

    const hearts=["❤","💖","💕","💗"];

    heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(12+Math.random()*18)+"px";

    heart.style.animationDuration=(8+Math.random()*5)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },14000);

}

setInterval(createHeart,700);

// ==========================================
// SPARKLES
// ==========================================

function createSparkle(){

    if(!sparkleContainer) return;

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML="✨";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.fontSize=(10+Math.random()*12)+"px";

    sparkle.style.animationDuration=(2+Math.random()*2)+"s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },4000);

}

setInterval(createSparkle,300);

// ==========================================
// SHOOTING STAR
// ==========================================

function createShootingStar(){

    if(!stars) return;

    const s=document.createElement("div");

    s.className="shooting-star";

    s.style.left=(Math.random()*80)+"vw";

    s.style.top=(Math.random()*25)+"vh";

    stars.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2500);

}

setInterval(createShootingStar,9000);