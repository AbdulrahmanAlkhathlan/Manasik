<img src="Frontend/assets/ManasikLogo.png" alt="Manasik Logo" width="90" style="vertical-align: middle;"/>  

# Manasik

**Manasik** is a modern web application that helps Muslims plan their Umrah journey with ease. It uses AI to generate personalized itineraries based on your travel dates, origin, transportation method, budget, and other preferences.

### 🌐 Live App  
👉 [www.manasikplanner.com](https://www.manasikplanner.com)


---

## 📚 Table of Contents
- [📝 Description](#-description)
- [✨ Features](#-features)
- [📸 Screenshots](#-screenshots)
- [⚙️ Tech Stack](#️-tech-stack)
- [🧠 Backend & AI](#-backend--ai)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Installation & Run](#️-installation--run)
- [🔐 Environment Variables](#-environment-variables)
- [🛣️ Roadmap](#️-roadmap)
- [🧾 License](#-license)

---

## 📝 Description

**Manasik** simplifies Umrah planning with an intelligent, AI-powered assistant. Whether you're traveling solo or with family, it generates a personalized itinerary that includes spiritual rituals, accommodation, transportation, historical sites, dining options, and more — all tailored to your preferences.

---

## ✨ Features

- 📆 AI-generated Umrah itinerary  
- 🏨 Hotel and flight suggestions tailored to your budget  
- ⏰ Activity time preferences (Morning, Afternoon, Evening, Night)  
- 🔐 User Authentication (Firebase Auth)  
- 📋 Step-by-step Umrah guide  
- 📱 Fully responsive layout  

---

## 📸 Screenshots

_Add your UI screenshots here_

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- **React** with **React Router**
- **Firebase Authentication**
- **React Icons**
- **Vite** (for fast bundling)

### 🧠 Backend & AI
- **FastAPI** (Python API framework)
- **Uvicorn** (ASGI server for FastAPI)
- **Pydantic** (data validation)
- **OpenAI API** (for itinerary generation)
- **python-dotenv** (environment configuration)

### 🔥 Database & APIs
- **Firestore** (NoSQL DB for plan storage)
- **Firebase SDKs** (Auth, Firestore, Hosting)

### 🚀 DevOps & Hosting
- **Firebase Hosting**
- **Cloudflare** (DNS + SSL)
- **GitHub Actions** (CI/CD pipeline)

---

## 🧠 Backend & AI

The backend is powered by **FastAPI**, a modern Python web framework. It handles the form inputs, AI logic, and route management. The actual itinerary generation uses the **OpenAI API** to build a contextual, day-by-day Umrah plan.

The app runs on **Uvicorn**, an asynchronous server for FastAPI.

Deployment can be done using **Firebase Functions**, **Render**, or any modern serverless platform.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (for frontend)
- **Python 3.10+** (for backend)
- Firebase project setup (for hosting & authentication)
- OpenAI API key

### Clone the Repository

```bash
git clone https://github.com/AbdulrahmanAlkhathlan/Manasik.git
cd Manasik
```
---

## ⚙️ Installation & Run

### Frontend
```bash
cd Frontend
npm install
npm run dev
```
### Backend
```bash
cd Backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🔐 Environment Variables

Create a .env file:

```env
VITE_OPENAI_API_KEY=your_openai_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```
Set up your Firebase credentials and configuration using the Firebase Console.

---

## 🛣️ Roadmap

- 🌐 Add multilingual (Arabic, English) support
- 📱 PWA (Progressive Web App) support
- 📍 Interactive map for Makkah
- 📊 Expense estimator and tracker
- 📂 Plan export as PDF or shareable link
- 🧾 Pilgrim checklist

---

## 🧾 License

This project is licensed under the MIT License — you’re free to use, modify, and distribute this project with attribution.
