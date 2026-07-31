// ==========================================
// PROJECT KRITI
// LUXURY BIRTHDAY EXPERIENCE
// ==========================================

const dateBox = document.querySelector(".date-box");
const cakeContainer = document.getElementById("cakeContainer");
const cardContainer = document.getElementById("cardContainer");

// ==========================================
// STEP 1
// Show Cake
// ==========================================

setTimeout(() => {

    dateBox.classList.add("up");

    cakeContainer.innerHTML = `

        <div class="luxury-cake">

            <div class="cake-shadow"></div>

            <div class="cake-base"></div>

            <div class="cake-layer"></div>

            <div class="cake-top"></div>

            <div class="candle"></div>

            <div id="flame"></div>

        </div>

        <button id="lightBtn">

            🕯 Light The Candle

        </button>

    `;

    cakeContainer.classList.add("show");

    setupButton();

},2500);


// ==========================================
// BUTTON
// ==========================================

function setupButton(){

    const btn=document.getElementById("lightBtn");

    btn.onclick=()=>{

        lightCandle();

    }

}

// ==========================================
// LIGHT CANDLE
// ==========================================

function lightCandle(){

    document.getElementById("flame").classList.add("show");

document.getElementById("lightBtn").style.display = "none";

    createSparkles();

    setTimeout(showCard,1200);

}

// ==========================================
// CARD
// ==========================================

function showCard(){

    document.querySelector(".date-box").style.display = "none";

    cakeContainer.style.display = "none";

    cardContainer.innerHTML=`

<div class="card">

<h2>

Happy Future Birthday

</h2>

<h3>

Kriti ❤️

</h3>

<p>

Today hasn't arrived yet.

<br><br>

But when

<b>05 October</b>

finally comes...

I hope your smile shines

brighter than every candle

on your cake.

<br><br>

May every dream

you carry

find its way

to reality.

<br><br>

And no matter

where life takes us...

I'll always celebrate

the day

you came into this world.

<br><br>

❤️

<br><br>

— Krish

</p>

<a class="gift-btn"
   href="#"
   onclick="event.preventDefault(); goToPage('promise.html');">

    🎁 Open Your Gift

</a>

</div>

`;

    cardContainer.classList.add("show");

    window.scrollTo({
    top: 0,
    behavior: "smooth"
});

}

// ==========================================
// GOLD SPARKLES
// ==========================================

function createSparkles(){

    for(let i=0;i<35;i++){

        const s=document.createElement("div");

        s.className="sparkle";

        s.style.left=Math.random()*100+"vw";

        s.style.top=Math.random()*100+"vh";

        s.style.animationDelay=Math.random()*2+"s";

        document.body.appendChild(s);

    }

}