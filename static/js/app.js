// =====================================
// Smart FAQ AI
// app.js
// =====================================


// Elements

const newChatBtn = document.querySelector(".new-chat-btn");

const chatMessages = document.getElementById("messages");

const welcomeScreen = document.getElementById("welcome");

const userInput = document.getElementById("user-input");

const themeBtn = document.getElementById("theme-btn");

const loginBtn = document.getElementById("login-btn");

const signupBtn = document.getElementById("signup-btn");

const micBtn = document.getElementById("mic-btn");

const attachBtn = document.getElementById("attach-btn");



// =====================================
// New Chat
// =====================================

if(newChatBtn){

    newChatBtn.addEventListener("click",()=>{


        chatMessages.innerHTML="";


        welcomeScreen.style.display="block";


        const typing =
        document.getElementById("typing");


        if(typing){

            typing.style.display="none";

        }


        userInput.value="";


        userInput.focus();


    });

}



// =====================================
// Login Button
// =====================================

if(loginBtn){

    loginBtn.addEventListener("click",()=>{

        window.location.href="/login";

    });

}





// =====================================
// Theme Toggle
// =====================================

if(themeBtn){

    themeBtn.addEventListener("click",()=>{


        document.body.classList.toggle("light-mode");


        if(document.body.classList.contains("light-mode")){

            themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        }

        else{

            themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        }


    });

}



// =====================================
// Plus Button
// =====================================

// =====================================
// File Attachment
// =====================================

const fileInput = document.getElementById("file-input");

if (attachBtn && fileInput) {

    attachBtn.addEventListener("click", () => {

        fileInput.click();

    });

    fileInput.addEventListener("change", async function () {

        if (this.files.length === 0) return;

        const file = this.files[0];

        // Image Preview
        if (file.type.startsWith("image/")) {

            const reader = new FileReader();

            reader.onload = function (e) {

                const message = document.createElement("div");

                message.className = "message user";

                message.innerHTML = `
                    <div class="bubble">
                        <img src="${e.target.result}"
                             style="max-width:220px;
                                    border-radius:12px;
                                    display:block;
                                    margin-bottom:8px;">

                        <div>📷 ${file.name}</div>
                    </div>
                `;

                messages.appendChild(message);

                scrollBottom();

            };

            reader.readAsDataURL(file);

        }

        else {

            addMessage("📎 " + file.name, "user");

        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            const response = await fetch("/upload", {

                method: "POST",

                body: formData

            });

            const data = await response.json();

            addMessage(data.message, "bot");

        }

        catch {

            addMessage("❌ File upload failed.", "bot");

        }

        this.value = "";

    });

}


// =====================================
// Voice Button
// =====================================

if(micBtn){


    micBtn.addEventListener("click",()=>{


        if(!("webkitSpeechRecognition" in window)){


            alert("Voice recognition not supported");


            return;

        }



        const recognition =
        new webkitSpeechRecognition();



        recognition.lang="en-US";


        recognition.start();



        recognition.onresult=function(event){


            userInput.value =
            event.results[0][0].transcript;


        };


    });


}



// =====================================
// Suggestion Buttons
// =====================================

const suggestionButtons =
document.querySelectorAll(".suggestions button");


suggestionButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        userInput.value =
        button.innerText;


        sendMessage();


    });


});



// =====================================
// Auto Focus
// =====================================

window.onload=()=>{


    if(userInput){

        userInput.focus();

    }


};