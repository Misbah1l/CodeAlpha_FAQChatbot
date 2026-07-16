// ======================================
// Smart FAQ AI
// chat.js (Updated)
// ======================================


// ======================================
// Elements
// ======================================

const input = document.getElementById("user-input");

const sendBtn = document.getElementById("send-btn");

const messages = document.getElementById("messages");

const welcome = document.getElementById("welcome");

const typing = document.getElementById("typing");

const fileInput = document.getElementById("file-input");

const attachBtn = document.getElementById("attach-btn");

const micBtn = document.getElementById("mic-btn");



// ======================================
// Send Button Event
// ======================================

if(sendBtn){

    sendBtn.addEventListener("click",sendMessage);

}



// ======================================
// Enter Key Event
// ======================================

if(input){

    input.addEventListener("keydown",function(e){

        if(e.key==="Enter"){

            e.preventDefault();

            sendMessage();

        }

    });

}



// ======================================
// Time
// ======================================

function getCurrentTime(){

    const now = new Date();


    return now.toLocaleTimeString([],{

        hour:"2-digit",

        minute:"2-digit"

    });

}



// ======================================
// Send Message
// ======================================

async function sendMessage(){


    if(!input || !messages) return;


    const text = input.value.trim();



    if(text==="") return;



    if(welcome){

        welcome.style.display="none";

    }



    addMessage(text,"user");


    input.value="";



    if(typing){

        typing.style.display="flex";

    }



    scrollBottom();



    try{


        const response = await fetch("/chat",{


            method:"POST",


            headers:{


                "Content-Type":"application/json"


            },


            body:JSON.stringify({


                message:text


            })


        });



        const data = await response.json();



        if(typing){

            typing.style.display="none";

        }



        addMessage(

            data.answer || "No answer found.",

            "bot"

        );



        if(typeof saveConversation==="function"){


            saveConversation(

                text,

                data.answer

            );


        }



    }


    catch(error){



        if(typing){

            typing.style.display="none";

        }



        addMessage(

            "❌ Unable to connect to server.",

            "bot"

        );


    }


}

// ======================================
// Add Message
// ======================================

function addMessage(text,sender){


    if(!messages) return;



    const message = document.createElement("div");


    message.className = `message ${sender}`;



    const avatar = document.createElement("img");


    avatar.className="avatar";



    avatar.src = sender==="user"

        ? "/static/images/user.png"

        : "/static/images/bot.png";





    const bubble = document.createElement("div");


    bubble.className="bubble";




    const messageText = document.createElement("div");


    messageText.className="message-text";


    messageText.innerHTML=text;




    const time = document.createElement("div");


    time.className="message-time";


    time.innerText=getCurrentTime();




    bubble.appendChild(messageText);


    bubble.appendChild(time);





    // Bot Actions

    if(sender==="bot"){


        const actions=document.createElement("div");



        actions.className="message-actions";



        actions.innerHTML=`

            <button class="action-btn copy-btn">

                <i class="fa-regular fa-copy"></i>

            </button>


            <button class="action-btn like-btn">

                <i class="fa-regular fa-thumbs-up"></i>

            </button>


            <button class="action-btn dislike-btn">

                <i class="fa-regular fa-thumbs-down"></i>

            </button>

        `;



        bubble.appendChild(actions);


    }





    if(sender==="user"){


        message.appendChild(bubble);


        message.appendChild(avatar);


    }


    else{


        message.appendChild(avatar);


        message.appendChild(bubble);


    }





    messages.appendChild(message);



    attachButtons();



    scrollBottom();



}






// ======================================
// Copy Like Dislike Buttons
// ======================================

function attachButtons(){



    document.querySelectorAll(".copy-btn")

    .forEach(button=>{


        button.onclick=function(){



            const text=this

            .closest(".bubble")

            .querySelector(".message-text")

            .innerText;




            navigator.clipboard.writeText(text);



            this.innerHTML=

            '<i class="fa-solid fa-check"></i>';




            setTimeout(()=>{


                this.innerHTML=

                '<i class="fa-regular fa-copy"></i>';



            },1500);



        };



    });







    document.querySelectorAll(".like-btn")

    .forEach(button=>{


        button.onclick=function(){


            this.classList.toggle("active");


        };


    });






    document.querySelectorAll(".dislike-btn")

    .forEach(button=>{


        button.onclick=function(){


            this.classList.toggle("active");


        };


    });



}






// ======================================
// Scroll Bottom
// ======================================

function scrollBottom(){


    if(messages){


        messages.scrollTop=

        messages.scrollHeight;


    }


}


// ======================================
// Voice Recognition
// ======================================

if(micBtn){



    micBtn.addEventListener("click",()=>{



        if(!("webkitSpeechRecognition" in window)){



            alert(

                "Voice recognition is not supported in this browser."

            );


            return;


        }





        const recognition =

        new webkitSpeechRecognition();






        recognition.lang="en-US";



        recognition.continuous=false;



        recognition.interimResults=false;






        recognition.start();





        micBtn.innerHTML=

        '<i class="fa-solid fa-stop"></i>';






        recognition.onresult=function(event){



            const voiceText =

            event.results[0][0].transcript;





            if(input){


                input.value=voiceText;


            }




        };







        recognition.onend=function(){



            micBtn.innerHTML=

            '<i class="fa-solid fa-microphone"></i>';



        };






    });



}







// ======================================
// Suggestions Buttons
// ======================================

document.querySelectorAll(".suggestions button")

.forEach(button=>{


    button.addEventListener("click",()=>{


        if(input){


            input.value=button.innerText;


            sendMessage();


        }


    });



});