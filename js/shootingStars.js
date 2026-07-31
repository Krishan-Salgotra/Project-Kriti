const background = document.querySelector(".background");

function createShootingStar() {

    const star = document.createElement("div");

    const length = 120 + Math.random() * 180;
    star.style.width = length + "px";

    star.className = "shooting-star";

    star.style.top = Math.random() * 45 + "%";
    star.style.left = Math.random() * 90 + "%";

    star.style.animationDuration =
        (0.9 + Math.random() * 0.8) + "s";

    background.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2200);

}

setInterval(() => {

    createShootingStar();

    if(Math.random() > 0.55){

        setTimeout(createShootingStar, 300);

    }

}, 2000);