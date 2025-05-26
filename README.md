<img src="Frontend/assets/ManasikLogo.png" alt="Manasik Logo" width="90" style="vertical-align: middle;"/>  

# Manasik

**Manasik** is a modern web application that helps Muslims plan their Umrah journey with ease. It uses AI to generate personalized itineraries based on your travel dates, origin, transportation method, budget, and other preferences — no need to select predefined tiers.

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

**Manasik** simplifies Umrah trip planning with a smart, AI-driven assistant. Whether you're traveling alone or with family, it builds a complete itinerary that includes spiritual rituals, hotel bookings, and more — all personalized to your needs.

---

## ✨ Features

- 📆 AI-generated Umrah itinerary  
- 🏨 Hotel and flight suggestions tailored to your budget  
- ⏰ Activity time preferences (Morning, Afternoon, Evening, Night)  
- 🔐 User Authentication (Firebase Auth)  
- 📋 Visual guide to performing Umrah  
- 📱 Fully responsive layout  

---

## 📸 Screenshots

_Add your UI screenshots here_

---

## ⚙️ Tech Stack

### Frontend
- **React**
- **React Router**
- **Firebase Authentication**
- **React Icons**

### Backend
- **FastAPI** (Python)
- **Uvicorn**

### Database
- **Cloud Firestore** (used to persist user-generated plans)

### APIs & AI
- **OpenAI API** (used for generating contextual day-by-day itineraries)
- **Firebase API** (for auth and storage)

### Hosting & DevOps
- **Firebase Hosting**
- **Cloudflare DNS + SSL**
- **GitHub Actions** (CI/CD)

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
