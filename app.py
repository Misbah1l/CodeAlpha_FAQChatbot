from flask import Flask, render_template, request, jsonify, redirect, url_for, session

from chatbot import FAQChatbot


app = Flask(__name__)


# =====================================
# Secret Key
# =====================================

app.secret_key = "smart_faq_ai_secret_key"



# =====================================
# Load Chatbot
# =====================================

chatbot = FAQChatbot("faq.json")



# =====================================
# Home
# =====================================

@app.route("/")
def home():

    if "user" not in session:

        return redirect(url_for("login"))


    return render_template(

        "index.html",

        username=session.get("user")

    )



# =====================================
# Login
# =====================================

@app.route("/login", methods=["GET", "POST"])
def login():


    # Already logged in

    if "user" in session:

        return redirect(url_for("home"))



    if request.method == "POST":


        username = request.form.get("username", "").strip()

        email = request.form.get("email", "").strip()

        password = request.form.get("password", "").strip()



        if username and email and password:


            # Save username entered by user

            session["user"] = username


            return redirect(url_for("home"))



    return render_template("login.html")
# =====================================
# Google Login
# =====================================

@app.route("/google-login")
def google_login():


    # Temporary Google Login

    # Later real Google OAuth can be added

    session["user"] = "Misbah Saeed"


    return redirect(url_for("home"))




# =====================================
# Chat API
# =====================================

@app.route("/chat", methods=["POST"])
def chat():


    if "user" not in session:


        return jsonify({

            "answer": "Please login first."

        }),401




    data = request.get_json()



    user_message = data.get("message","").strip()



    if not user_message:


        return jsonify({

            "answer":"Please enter a question."

        })




    response = chatbot.get_response(user_message)



    return jsonify({


        "question": response["question"],


        "answer": response["answer"],


        "confidence": response["confidence"]


    })




# =====================================
# Logout
# =====================================

@app.route("/logout")
def logout():


    session.clear()


    return redirect(url_for("login"))




# =====================================
# Run App
# =====================================

if __name__ == "__main__":


    app.run(debug=True)