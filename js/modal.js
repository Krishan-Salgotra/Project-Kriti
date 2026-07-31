/* ==========================================
   PROJECT KRITI
   MODAL.JS
========================================== */

/* ==========================================
   MEMORY DATA
========================================== */

const memories = [

    {

        title: "First Meet ❤️",

        date: "02 July 2026",

        image: "assets/images/Card1.png",

        story:
`The day everything started...

One simple conversation slowly became one of the most beautiful parts of my life.

Little did we know,
this was only the beginning of our story.`

    },

    {

        title: "First Call 📞",

        date: "04 July 2026",

        image: "assets/images/Card2.png",

        story:
`Hours felt like minutes.

Every laugh,
every silence,
every little moment...

made me want to talk forever.`

    },

    {

        title: "First Picture 📸",

        date: "08 July 2026",

        image: "assets/images/Card3.png",

        story:
`One picture.

Thousands of emotions.

A memory frozen forever.`

    },

    {
    title: "More Beautiful Memories... ❤️",

    date: "Coming Soon",

    image: "assets/images/Card4.png",

    story:
`This chapter is waiting for our real memories.

One day,
this card won't say "Coming Soon."

It will be filled with our own beautiful moments.`
}

];

/* ==========================================
   CREATE MODAL
========================================== */

document.body.insertAdjacentHTML("beforeend", `

<div class="memory-modal" id="memoryModal">

    <div class="modal-content">

        <button class="modal-close" id="modalClose">

            ✕

        </button>

        <button class="modal-prev" id="modalPrev">
    ❮
</button>

<button class="modal-next" id="modalNext">
    ❯
</button>

        <img
            id="modalImage"
            class="modal-image"
            src=""
            alt="Memory Image"
        >

        <div class="modal-body">

        <div class="modal-counter" id="modalCounter">
    Memory 1 of 3
</div>

        <div class="modal-progress">

    <div
        class="modal-progress-fill"
        id="modalProgress">
    </div>

</div>

            <div
                id="modalDate"
                class="modal-date">
            </div>

            <h2
                id="modalTitle"
                class="modal-title">
            </h2>

            <p
                id="modalStory"
                class="modal-story">
            </p>

        </div>

    </div>

</div>

`);

/* ==========================================
   ELEMENTS
========================================== */

const modal = document.getElementById("memoryModal");

const modalImage = document.getElementById("modalImage");

const modalDate = document.getElementById("modalDate");

const modalTitle = document.getElementById("modalTitle");

const modalStory = document.getElementById("modalStory");

const modalCounter = document.getElementById("modalCounter");

const modalProgress = document.getElementById("modalProgress");

const modalClose = document.getElementById("modalClose");

const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");

let currentMemory = 0;

/* ==========================================
   OPEN MEMORY
========================================== */

function openMemory(index){

    currentMemory = index;

    modalCounter.textContent =
`Memory ${index + 1} of ${memories.length}`;

    modalProgress.style.width =
`${((index + 1) / memories.length) * 100}%`;

    const memory = memories[index];

    if(!memory) return;

    modalImage.src = memory.image;

    modalImage.alt = memory.title;

    modalDate.textContent = "📅 " + memory.date;

    modalTitle.textContent = memory.title;

    modalStory.textContent = memory.story;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}

/* ==========================================
   CLOSE MEMORY
========================================== */

function closeMemory(){

    modal.classList.remove("show");

    document.body.style.overflow = "";

}

/* ==========================================
   CLOSE EVENTS
========================================== */

modalClose.addEventListener("click", closeMemory);

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        closeMemory();

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeMemory();

    }

});

/* ==========================================
   TIMELINE CARD EVENTS
========================================== */

const cards = document.querySelectorAll(".timeline-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const index = Number(card.dataset.memory);

        openMemory(index);

    });

});

/* ==========================================
   NEXT / PREVIOUS
========================================== */

modalPrev.addEventListener("click",()=>{

    currentMemory--;

    if(currentMemory<0){

        currentMemory=memories.length-1;

    }

    openMemory(currentMemory);

});

modalNext.addEventListener("click",()=>{

    currentMemory++;

    if(currentMemory>=memories.length){

        currentMemory=0;

    }

    openMemory(currentMemory);

});

/* ==========================================
   KEYBOARD
========================================== */

document.addEventListener("keydown",(e)=>{

    if(!modal.classList.contains("show")) return;

    if(e.key==="ArrowLeft"){

        modalPrev.click();

    }

    if(e.key==="ArrowRight"){

        modalNext.click();

    }

});

/* ==========================================
   IMAGE PRELOADING
========================================== */

memories.forEach(memory => {

    const img = new Image();

    img.src = memory.image;

});

/* ==========================================
   OPEN ANIMATION
========================================== */

modalImage.addEventListener("load", () => {

    modalImage.animate(

        [

            {

                opacity:0,

                transform:"scale(.96)"

            },

            {

                opacity:1,

                transform:"scale(1)"

            }

        ],

        {

            duration:450,

            easing:"ease-out"

        }

    );

});