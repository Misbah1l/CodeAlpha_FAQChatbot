// ======================================
// Smart FAQ AI
// sidebar.js
// ======================================


const historyList =
document.getElementById("history-list");



let conversations =
JSON.parse(localStorage.getItem("conversations")) || [];




// ======================================
// Save Conversation
// ======================================

function saveConversation(question, answer){


    const conversation = {


        id: Date.now(),


        title: question.length > 30

        ? question.substring(0,30) + "..."

        : question,


        question: question,


        answer: answer,


        time: new Date().toLocaleString()


    };



    conversations.unshift(conversation);



    localStorage.setItem(

        "conversations",

        JSON.stringify(conversations)

    );



    loadHistory();


}






// ======================================
// Load History
// ======================================

function loadHistory(){


    if(!historyList) return;



    historyList.innerHTML = "";




    conversations.forEach(chat=>{


        const li =
        document.createElement("li");



        li.className =
        "history-item";



        li.innerHTML = `


        <div class="history-content">


            <i class="fa-solid fa-message"></i>


            <span></span>


        </div>



        <button class="delete-chat">


            <i class="fa-solid fa-trash"></i>


        </button>


        `;





        li.querySelector("span").textContent =
        chat.title;





        li.querySelector(".history-content")
        .addEventListener("click",()=>{


            openConversation(chat);



            document.querySelectorAll(".history-item")
            .forEach(item=>{


                item.classList.remove("active");


            });



            li.classList.add("active");


        });







        li.querySelector(".delete-chat")
        .addEventListener("click",(e)=>{


            e.stopPropagation();



            deleteConversation(chat.id);



        });






        historyList.appendChild(li);



    });


}







// ======================================
// Open Conversation
// ======================================

function openConversation(chat){


    const messages =
    document.getElementById("messages");


    const welcome =
    document.getElementById("welcome");



    if(!messages) return;



    messages.innerHTML="";



    if(welcome){

        welcome.style.display="none";

    }



    addMessage(
        chat.question,
        "user"
    );


    addMessage(
        chat.answer,
        "bot"
    );


}







// ======================================
// Delete Conversation
// ======================================

function deleteConversation(id){


    conversations =
    conversations.filter(

        chat => chat.id !== id

    );



    localStorage.setItem(

        "conversations",

        JSON.stringify(conversations)

    );



    loadHistory();


}







// ======================================
// Search Chats
// ======================================

const searchInput =
document.getElementById("search-chat");



if(searchInput){


    searchInput.addEventListener(
        "keyup",
        function(){



            const value =
            this.value.toLowerCase();




            document.querySelectorAll(".history-item")
            .forEach(item=>{


                item.style.display =


                item.innerText
                .toLowerCase()
                .includes(value)


                ? "flex"


                : "none";



            });



        }
    );


}







// ======================================
// Profile Logout
// ======================================

const logoutBtn =
document.getElementById("logout-btn");



if(logoutBtn){


    logoutBtn.addEventListener(
        "click",
        ()=>{


            window.location.href="/logout";


        }
    );


}






// ======================================
// Load
// ======================================

window.addEventListener("load",()=>{


    loadHistory();


});