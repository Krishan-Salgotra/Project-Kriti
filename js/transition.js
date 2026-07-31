/* ==========================================
   PROJECT KRITI
   CINEMATIC TRANSITIONS
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    // Fade In

    document.body.classList.add("page-loaded");

});

// ===============================
// Navigate
// ===============================

function goToPage(url){

    document.body.classList.add("page-exit");

    setTimeout(()=>{

        window.location.href=url;

    },900);

}

window.goToPage=goToPage;