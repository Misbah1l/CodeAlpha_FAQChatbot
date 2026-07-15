// ======================================
// Smart FAQ AI
// auth.js
// ======================================



// ======================================
// Password Toggle
// ======================================

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if(togglePassword && passwordInput){

    togglePassword.addEventListener("click",()=>{

        if(passwordInput.type==="password"){

            passwordInput.type="text";

            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");

        }

        else{

            passwordInput.type="password";

            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");

        }

    });

}



// ======================================
// Login Validation
// ======================================

const loginForm =
document.querySelector('form[action="/login"]');

if(loginForm){

    loginForm.addEventListener("submit",(e)=>{

        const email =
        document.querySelector(
            'input[name="email"]'
        ).value.trim();

        const password =
        document.querySelector(
            'input[name="password"]'
        ).value.trim();

        if(email==="" || password===""){

            e.preventDefault();

            alert("Please fill all fields.");

            return;

        }

        if(password.length<6){

            e.preventDefault();

            alert(
                "Password must contain at least 6 characters."
            );

            return;

        }

    });

}



// ======================================
// Google Login
// ======================================

const googleLogin =
document.getElementById("google-login");

if(googleLogin){

    googleLogin.addEventListener("click",()=>{

        window.location.href="/google-login";

    });

}



// ======================================
// Theme Toggle
// ======================================

const authThemeBtn =
document.getElementById("auth-theme-btn");

if(authThemeBtn){

    // Apply Saved Theme

    const savedTheme =
    localStorage.getItem("theme");

    if(savedTheme==="light"){

        document.body.classList.add("light-mode");

        authThemeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        authThemeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }


    authThemeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("light-mode");


        if(document.body.classList.contains("light-mode")){

            localStorage.setItem("theme","light");

            authThemeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        }

        else{

            localStorage.setItem("theme","dark");

            authThemeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        }

    });

}