const scrollHint = document.getElementById("timelineScroll");

const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {

    // Hide scroll hint

    if(window.scrollY > 80){

        scrollHint.style.opacity = "0";

    }

    else{

        scrollHint.style.opacity = ".85";

    }

    // Reveal cards + activate dots

    items.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight * 0.82){

            item.classList.add("show");

        }

        const dot = item.querySelector(".timeline-dot");

        if(

            top < window.innerHeight*0.45 &&

            top > window.innerHeight*0.15

        ){

            dot.classList.add("active");

        }

        else{

            dot.classList.remove("active");

        }

    });

});