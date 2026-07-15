from flask import Flask, render_template, request, jsonify, redirect, url_for, session

from chatbot import FAQChatbot

import os

from werkzeug.utils import secure_filename


app = Flask(__name__)

# Secret Key
app.secret_key = "smart_faq_ai_secret_key"


# ==========================
# Upload Folder
# ==========================

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


# ==========================
# Load Chatbot
# ==========================

chatbot = FAQChatbot("faq.json")


# ==========================
# Home
# ==========================

@app.route("/")
def home():

    return render_template(

        "index.html",

        username=session.get("user")

    )


# ==========================
# Login
# ==========================

@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        email = request.form.get("email")
        password = request.form.get("password")

        if email and password:

            username = email.split("@")[0]

            session["user"] = username

            return redirect(url_for("home"))

    return render_template("login.html")


# ==========================
# Google Login (Temporary)
# ==========================

@app.route("/google-login")
def google_login():

    session["user"] = "Misbah"

    return redirect(url_for("home"))


# ==========================
# Chat API
# ==========================

@app.route("/chat", methods=["POST"])
def chat():

    data = request.get_json()

    user_message = data.get("message", "").strip()

    if not user_message:

        return jsonify({

            "answer": "Please enter a question."

        })

    response = chatbot.get_response(user_message)

    return jsonify({

        "question": response["question"],

        "answer": response["answer"],

        "confidence": response["confidence"]

    })


# ==========================
# File Upload
# ==========================

@app.route("/upload", methods=["POST"])
def upload_file():

    if "file" not in request.files:

        return jsonify({

            "message": "No file selected."

        }), 400


    file = request.files["file"]

    if file.filename == "":

        return jsonify({

            "message": "No file selected."

        }), 400


    filename = secure_filename(file.filename)

    filepath = os.path.join(

        app.config["UPLOAD_FOLDER"],

        filename

    )

    file.save(filepath)

    return jsonify({

        "message": f"✅ {filename} uploaded successfully."

    })


# ==========================
# Logout
# ==========================

@app.route("/logout")
def logout():

    session.clear()

    return redirect(url_for("login"))


# ==========================
# Run App
# ==========================

if __name__ == "__main__":

    app.run(debug=True)