const moon = document.querySelector(".moon");
const aurora = document.querySelector(".aurora");
const cloud1 = document.querySelector(".cloud1");
const cloud2 = document.querySelector(".cloud2");

window.addEventListener("scroll", () => {

    const y = window.scrollY;

    moon.style.transform =
        `translateY(${y * 0.15}px)`;

    aurora.style.transform =
        `translate(-50%, -50%) translateY(${y * 0.08}px)`;

    cloud1.style.transform =
        `translateX(${y * 0.08}px)`;

    cloud2.style.transform =
        `translateX(${-y * 0.05}px)`;

});