// ==========================================
// OUR LITTLE GAMES ❤️
// Automatic Heart Experience
// ==========================================

const container = document.getElementById("heartContainer");

const scoreEl = document.getElementById("score");
const progressBar = document.getElementById("progressBar");

const TARGET = 15;

let score = 0;
let finished = false;

// Initial UI
scoreEl.textContent = score;
progressBar.style.width = "0%";

// ==========================================
// Create Falling Heart
// ==========================================

function createHeart(){

    if(finished) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * (window.innerWidth - 80) + "px";

    heart.style.top = "-80px";

    container.appendChild(heart);

    let y = -80;

    const speed = 2 + Math.random() * 2;

    function fall(){

        if(!heart.parentNode) return;

        y += speed;

        heart.style.top = y + "px";

        if(y >= window.innerHeight){

            heart.remove();

            score++;

            scoreEl.textContent = score;

            progressBar.style.width =
                (score / TARGET) * 100 + "%";

            if(score >= TARGET){

                finished = true;

                finishGame();

                return;

            }

        }else{

            requestAnimationFrame(fall);

        }

    }

    requestAnimationFrame(fall);

}

// ==========================================
// Spawn Hearts Automatically
// ==========================================

const interval = setInterval(()=>{

    if(finished){

        clearInterval(interval);

        return;

    }

    createHeart();

},650);

// ==========================================
// Finish Screen
// ==========================================

function finishGame(){

    const screen = document.createElement("div");

    screen.className = "finish-screen";

    screen.innerHTML = `

    <div class="finish-card">

        <h2>❤️ My Heart Is Full ❤️</h2>

        <p>

            Every heart that fell...

            reminded me of one more reason

            why you are so special to me.

            <br><br>

            Now...

            there's one more thing

            waiting for you.

        </p>

        <a href="#"
        onclick="event.preventDefault(); goToPage('truth.html');">

            Continue ❤️

        </a>

    </div>

    `;

    document.body.appendChild(screen);

}