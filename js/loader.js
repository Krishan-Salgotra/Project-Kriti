const loadingText = document.getElementById("loadingText");
const loadingPercent = document.getElementById("loadingPercent");
const progressBar = document.getElementById("progressBar");

const messages = [
    "Initializing...",
    "Loading memories...",
    "Collecting smiles...",
    "Connecting hearts...",
    "Preparing a surprise...",
    "Almost ready..."
];

let percent = 0;
let messageIndex = 0;

const interval = setInterval(() => {

    percent++;

    progressBar.style.width = percent + "%";

    loadingPercent.textContent = percent + "%";

    if(percent % 18 === 0 && messageIndex < messages.length-1){

        messageIndex++;

        loadingText.textContent = messages[messageIndex];

    }

    if(percent >= 100){

        clearInterval(interval);

        loadingText.textContent = "Welcome, Kriti ❤️";

        setTimeout(() => {

            goToPage("login.html");

        },1200);

    }

},45);