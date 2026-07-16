// =====================================
// Smart FAQ AI
// app.js
// =====================================

// =====================================
// Elements
// =====================================

const newChatBtn = document.getElementById("new-chat-btn");

const chatMessages = document.getElementById("messages");

const welcomeScreen = document.getElementById("welcome");

const userInput = document.getElementById("user-input");

const themeBtn = document.getElementById("theme-btn");

const loginBtn = document.getElementById("login-btn");

const appMicBtn = document.getElementById("mic-btn");


// =====================================
// New Chat
// =====================================


if(newChatBtn){

    newChatBtn.onclick = function(){

        if(chatMessages){

            chatMessages.innerHTML = "";

        }


        if(welcomeScreen){

            welcomeScreen.style.display = "block";

        }


        const typing = document.getElementById("typing");


        if(typing){

            typing.style.display = "none";

        }


        if(userInput){

            userInput.value = "";

            userInput.focus();

        }

    };

}

// =====================================
// Login Button
// =====================================

if (loginBtn) {

    loginBtn.addEventListener("click", () => {

        window.location.href = "/login";

    });

}


// =====================================
// Theme Toggle
// =====================================

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        }

        else {

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}
// =====================================
// Voice Recognition
// =====================================

if (appMicBtn) {

    micBtn.addEventListener("click", () => {

        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) {

            alert("Voice recognition is not supported in this browser.");

            return;

        }

        const recognition = new SpeechRecognition();

        recognition.lang = "en-US";

        recognition.interimResults = false;

        recognition.maxAlternatives = 1;

        recognition.start();

        recognition.onstart = () => {

            appMicBtn.innerHTML =
                '<i class="fa-solid fa-microphone-lines"></i>';

        };

        recognition.onresult = (event) => {

            if (userInput) {

                userInput.value =
                    event.results[0][0].transcript;

            }

        };

        recognition.onerror = () => {

            alert("Voice recognition failed.");

        };

        recognition.onend = () => {

            appMicBtn.innerHTML =
                '<i class="fa-solid fa-microphone"></i>';

        };

    });

}


// =====================================
// Suggestion Buttons
// =====================================

const suggestionButtons =
    document.querySelectorAll(".suggestions button");

suggestionButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (!userInput) return;

        userInput.value = button.innerText;

        if (typeof sendMessage === "function") {

            sendMessage();

        }

    });

});
// =====================================
// Auto Focus
// =====================================

window.addEventListener("load", () => {

    if (userInput) {

        userInput.focus();

    }

});


// =====================================
// Keyboard Shortcut
// Ctrl + /  => Focus Input
// =====================================

document.addEventListener("keydown", (event) => {

    if (event.ctrlKey && event.key === "/") {

        event.preventDefault();

        if (userInput) {

            userInput.focus();

        }

    }

});


// =====================================
// Prevent Empty Elements Errors
// =====================================

if (!chatMessages) {

    console.warn("Messages container not found.");

}

if (!userInput) {

    console.warn("User input not found.");

}


// =====================================
// Smart FAQ AI
// Final Version
// =====================================