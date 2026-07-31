/* ==========================================
   PROJECT KRITI
   GALLERY.JS
========================================== */

/* ==========================================
   MEMORIES
========================================== */

const memories = [

    {
        title: "😊 The Smile I Fell For",
        date: "One Beautiful Day ❤️",
        image: "assets/images/photo1.jpg",

        story: `The smile that unknowingly became my favorite.

Some smiles are beautiful.

Yours became my peace.

Every time I look at this picture,
I fall for you all over again.`
    },

    {
        title: "❤️ My Favorite Picture",
        date: "A Memory I'll Never Forget",
        image: "assets/images/photo2.jpg",

        story: `If someone asked me what perfection looks like...

I'd quietly show them this picture.

You probably don't even realize how beautiful you are,
but I do.
Every single day.`
    },

    {
        title: "✨ Beautiful, As Always",
        date: "Forever Beautiful",
        image: "assets/images/photo3.jpg",

        story: `You don't try to be beautiful...

You just are.

Some people wear beauty.

You carry it naturally.`
    },

    {
        title: "🌸 My Happy Place",
        date: "Home ❤️",
        image: "assets/images/photo4.jpg",

        story: `Some people spend their whole lives
searching for peace.

I found mine
the day I found you.

Wherever you are,
that's my favorite place.`
    },

    {
        title: "🎁 05 October",
        date: "Coming Soon...",
        image: "assets/images/photo5.jpg",

        story: `Some surprises are too special
to reveal early.

Come back on 5 October...

I have something waiting
only for you. ❤️🎂`
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

        <img
            id="modalImage"
            class="modal-image"
            src=""
            alt="Memory">

        <div class="modal-body">

            <div
                class="modal-counter"
                id="modalCounter">
            </div>

            <div class="modal-progress">

                <div
                    class="modal-progress-fill"
                    id="modalProgress">
                </div>

            </div>

            <div
                class="modal-date"
                id="modalDate">
            </div>

            <h2
                class="modal-title"
                id="modalTitle">
            </h2>

            <p
                class="modal-story"
                id="modalStory">
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

/* ==========================================
   OPEN MEMORY
========================================== */

function openMemory(index){

    const memory = memories[index];

    modalImage.src = memory.image;

    modalDate.textContent =
    "📅 " + memory.date;

    modalTitle.textContent =
    memory.title;

    modalStory.textContent =
    memory.story;

    modalCounter.textContent =
    `Memory ${index + 1} of ${memories.length}`;

    modalProgress.style.width =
    `${((index + 1) / memories.length) * 100}%`;

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
   EVENTS
========================================== */

modalClose.addEventListener("click", closeMemory);

modal.addEventListener("click", (e)=>{

    if(e.target === modal){

        closeMemory();

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        closeMemory();

    }

});

/* ==========================================
   POLAROID CLICK
========================================== */

const polaroids =
document.querySelectorAll(".polaroid");

polaroids.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        openMemory(index);

    });

});