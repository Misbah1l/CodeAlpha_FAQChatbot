# 🤖 Smart FAQ AI Assistant

An intelligent FAQ-based chatbot built with **Flask, NLP, and Machine Learning techniques**.  
Smart FAQ AI Assistant helps users get instant answers to frequently asked questions using **TF-IDF Vectorization and Cosine Similarity**.

The application provides a modern ChatGPT-style interface with authentication, chat history, voice input, theme switching, and an interactive user experience.

---

# ✨ Features

## 🤖 AI FAQ Chatbot
- NLP-based question answering system
- Uses TF-IDF Vectorizer
- Uses Cosine Similarity for matching questions
- Returns the most relevant FAQ answer
- Confidence score generation

## 💬 Chat Interface
- Modern ChatGPT-style UI
- User and AI message bubbles
- AI typing animation
- Copy response option
- Like / Dislike feedback buttons
- Suggested FAQ questions

## 🔐 Authentication System
- User Login
- User Signup
- Session-based authentication
- Google Login button integration (demo)

## 🌓 User Experience
- Dark theme interface
- Light theme support
- Responsive design
- Mobile-friendly layout

## 🎤 Voice Support
- Voice input using browser speech recognition

## 💾 Chat History
- Save previous conversations
- View recent chats
- Search conversations
- Delete chat history

---

# 🛠️ Technologies Used

## Backend
- Python
- Flask

## Artificial Intelligence / NLP
- Scikit-learn
- TF-IDF Vectorization
- Cosine Similarity
- Text preprocessing

## Frontend
- HTML5
- CSS3
- JavaScript
- Font Awesome Icons

## Data Storage
- JSON Dataset (`faq.json`)
- Browser Local Storage

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

# 🖼️ Images Used

| Image | Purpose |
|---|---|
| logo.png | Sidebar and Login page logo |
| favicon.png | Browser tab icon |
| bot.png | AI assistant avatar |
| user.png | User message avatar |
| welcome.png | Welcome screen illustration |
| google.png | Google login button icon |

---

# ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/Smart-FAQ-AI.git
```

### 2. Open Project Folder

```bash
cd Smart-FAQ-AI
```

### 3. Create Virtual Environment

```bash
python -m venv venv
```

Activate environment:

Windows:

```bash
venv\Scripts\activate
```

---

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 5. Run Application

```bash
python app.py
```

---

### 6. Open Browser

```
http://127.0.0.1:5000/
```

---

# 📸 Application Screens


Home Screen

<img width="1917" height="942" alt="image" src="https://github.com/user-attachments/assets/9d0e1bc4-9921-4182-ad45-09d55bf9e54f" />


Chat Screen

<img width="1918" height="932" alt="image" src="https://github.com/user-attachments/assets/44979ceb-4a6f-4dc5-8f8c-51872f15e04d" />


Login Screen

<img width="1665" height="935" alt="image" src="https://github.com/user-attachments/assets/3185639e-cbe9-4135-87a3-5d9746f56a9c" />


<img width="1899" height="857" alt="image" src="https://github.com/user-attachments/assets/c20573da-d725-4619-ab00-a83b501691a8" />



---

# 🧠 How It Works

```
User Question

      ↓

Text Preprocessing

      ↓

TF-IDF Vectorization

      ↓

Cosine Similarity Matching

      ↓

Best FAQ Answer

      ↓

Response Display
```

---

# 🔮 Future Improvements

- Real Google OAuth authentication
- Database integration
- Admin dashboard for FAQ management
- PDF FAQ document upload
- Multilingual support
- Advanced AI model integration
- Image and document understanding

---

# 👩‍💻 Developer

**Misbah Saeed**

BS Computer Science Student

Skills:
- Python
- Flask
- Machine Learning
- NLP
- HTML/CSS
- JavaScript
- MongoDB
- SQL

---

# 📄 License

This project is created for educational and learning purposes.
