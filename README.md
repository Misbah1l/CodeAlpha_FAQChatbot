# 🤖 Smart FAQ AI Chatbot

Smart FAQ AI is an intelligent FAQ-based chatbot developed using **Python, Flask, NLP, and Machine Learning techniques**. It provides instant answers to frequently asked questions using **TF-IDF Vectorization and Cosine Similarity**.

The chatbot comes with a modern ChatGPT-style interface including authentication, chat history, dark/light mode, and voice input support.

---

## 🚀 Features

✨ **AI FAQ Chatbot**
- Answers user questions using NLP techniques
- Uses TF-IDF and Cosine Similarity for matching
- Provides confidence-based responses

🔐 **User Authentication**
- Login system
- Username-based profile display
- Logout functionality

💬 **Chat Features**
- Real-time conversation
- Chat history storage
- New Chat option
- Copy response button
- Like/Dislike feedback buttons

🎤 **Voice Support**
- Voice input using Speech Recognition API

🎨 **Modern UI**
- ChatGPT-inspired interface
- Dark/Light theme toggle
- Responsive design
- Premium glassmorphism login page

📚 **FAQ Knowledge Base**
- Programming languages
- Web development
- Databases
- Artificial Intelligence
- Machine Learning
- CodeAlpha internship FAQs

---

# 🛠️ Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript
- Font Awesome Icons

## Backend
- Python
- Flask

## Artificial Intelligence / NLP
- TF-IDF Vectorization
- Cosine Similarity
- Natural Language Processing

## Libraries
- Scikit-learn
- NLTK
- Flask

---

# 📂 Project Structure

```
Smart-FAQ-AI/
│
├── app.py
├── chatbot.py
├── preprocess.py
├── faq.json
├── requirements.txt
│
├── templates/
│   ├── index.html
│   ├── login.html
│   └── signup.html
│
├── static/
│   │
│   ├── css/
│   │   ├── style.css
│   │   ├── chat.css
│   │   ├── auth.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── chat.js
│   │   ├── sidebar.js
│   │   └── auth.js
│   │
│   └── images/
│       ├── logo.png
│       ├── favicon.png
│       ├── bot.png
│       ├── user.png
│       ├── welcome.png
│       └── google.png
│
└── README.md
```
---

# 📸 Application Screens


Login Screen

<img width="1567" height="933" alt="image" src="https://github.com/user-attachments/assets/6b535579-c44f-4ddd-a23f-44365f526652" />


Home Screen

<img width="1910" height="933" alt="image" src="https://github.com/user-attachments/assets/75a8e459-7d60-4de4-bc6e-cc3057b19efb" />


Chat Screen

<img width="1916" height="858" alt="image" src="https://github.com/user-attachments/assets/893c133b-b8b9-4941-a91c-7cf365c0fefb" />



---

# ⚙️ Installation & Setup

## 1. Clone Repository

```
git clone https://github.com/Misbah1l/CodeAlpha_FAQChatbot.git

```
## 2. Open Project Folder
```
cd CodeAlpha_FAQChatbot
```  
## 3. Install Dependencies
```
pip install -r requirements.txt
```

## 4. ▶️ Run Application

Start Flask server:
```
python app.py
```
Open browser:

```
http://127.0.0.1:5000/
```
---
# 🧠 How It Works
User enters a question.
Text is preprocessed using NLP techniques.
TF-IDF converts text into numerical vectors.
Cosine Similarity compares user input with stored FAQs.
The chatbot returns the most relevant answer.

# 📌 Example Questions
What is Python?

What is Machine Learning?

What programming languages are used?

What is CodeAlpha?

What is MongoDB?

What is GitHub?

# 🔮 Future Improvements
Real Google OAuth Authentication
Image and file understanding
Voice output response
Larger FAQ dataset
Deep Learning based chatbot model
Database integration

# 👩‍💻 Developer

Misbah Saeed

BS Computer Science Student

# GitHub:
https://github.com/Misbah1l


# 📜 License

This project is developed for educational and internship purposes.
