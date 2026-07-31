const bg = document.querySelector(".background");

function createHeart() {

    const heart = document.createElement("div");
    heart.className = "floating-heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (10 + Math.random() * 12) + "px";

    heart.style.animationDuration = (8 + Math.random() * 8) + "s";

    heart.style.opacity = 0.15 + Math.random() * 0.35;

    bg.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });

}

setInterval(() => {

    if(document.querySelectorAll(".floating-heart").length < 12){
        createHeart();
    }

}, 1200);