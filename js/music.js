/* ==========================================
   PROJECT KRITI
   GLOBAL MUSIC ENGINE
========================================== */

const MUSIC_PATH = "assets/music/a-thousand-years.mp3";

let music = new Audio(MUSIC_PATH);

music.loop = true;

music.preload = "auto";

// Restore Volume

const savedVolume = localStorage.getItem("musicVolume");

music.volume = savedVolume ? parseFloat(savedVolume) : 0.6;

// Restore Time

const savedTime = localStorage.getItem("musicTime");

if(savedTime){

    music.currentTime = parseFloat(savedTime);

}

// Should Music Play?

const shouldPlay = localStorage.getItem("musicPlaying");

if(shouldPlay==="true"){

    music.play().catch(()=>{});

}

// Save Position

setInterval(()=>{

    if(!music.paused){

        localStorage.setItem(

            "musicTime",

            music.currentTime

        );

    }

},1000);

// =======================
// Fade In
// =======================

function startMusic(){

    music.volume=0;

    music.play().catch(()=>{});

    localStorage.setItem("musicPlaying","true");

    let v=0;

    const fade=setInterval(()=>{

        v+=0.02;

        music.volume=v;

        if(v>=0.6){

            clearInterval(fade);

        }

    },100);

}

// =======================
// Fade Out
// =======================

function stopMusic(callback){

    let v=music.volume;

    const fade=setInterval(()=>{

        v-=0.02;

        music.volume=v;

        if(v<=0){

            clearInterval(fade);

            music.pause();

            localStorage.setItem(

                "musicPlaying",

                "false"

            );

            if(callback) callback();

        }

    },100);

}

// =======================
// Toggle
// =======================

function toggleMusic(){

    if(music.paused){

        music.play();

        localStorage.setItem(

            "musicPlaying",

            "true"

        );

    }

    else{

        music.pause();

        localStorage.setItem(

            "musicPlaying",

            "false"

        );

    }

}

// =======================

window.startMusic=startMusic;

window.stopMusic=stopMusic;

window.toggleMusic=toggleMusic;

window.music=music;