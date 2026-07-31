const starsContainer = document.getElementById("stars");

const STAR_COUNT = 220;

for(let i = 0; i < STAR_COUNT; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random();

    star.style.animationDuration =
        (2 + Math.random() * 4) + "s";

    star.style.animationDelay =
        (Math.random() * 5) + "s";

    starsContainer.appendChild(star);

}