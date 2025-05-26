<img src="Frontend/assets/ManasikLogo.png" alt="Manasik Logo" width="90" style="vertical-align: middle;"/>  

# Manasik

**Manasik** is a modern web application that helps Muslims plan their Umrah journey with ease. It uses AI to generate personalized itineraries based on your travel dates, origin, transportation method, budget, and other preferences.

### 🌐 Live App  
👉 [www.manasikplanner.com](https://www.manasikplanner.com)


---

## 📚 Table of Contents
- [📝 Description](#-description)
- [✨ Features](#-features)
- [🖼 UI Screenshots](#-ui-screenshots)
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
- 📖 View, navigate, and manage your day-by-day itinerary
- 🔄 Editable plans with ability to re-generate or delete
- 💾 Persistent plans saved in Firestore and localStorage

---

## 🖼 UI Screenshots

### 🔐 Authentication Page
![Screenshot 2025-05-26 025501](https://github.com/user-attachments/assets/391b9dc4-a3d0-4412-a933-d0dc7fef9325)

### 🏠 Home Page
![Screenshot 2025-05-26 025517](https://github.com/user-attachments/assets/7a5b0c9e-eb21-47fb-8d90-2c37cc688a3c)

### 🗓 Plan Page
- **Step 1: Travel Dates**
![Screenshot 2025-05-26 025536](https://github.com/user-attachments/assets/2d38418f-2f1c-4413-aafe-cf744891220c)

- **Step 2: Origin**
![Screenshot 2025-05-26 025545](https://github.com/user-attachments/assets/30201e42-b5dc-45cf-9892-74459eb94ffc)

- **Step 3: Transportation & Budget**
![Screenshot 2025-05-26 025607](https://github.com/user-attachments/assets/03529a4c-a3bb-4552-8bb7-2cb06e102e9e)

- **Step 4: Additional Details**
![Screenshot 2025-05-26 025619](https://github.com/user-attachments/assets/d0c808df-ee75-4b8c-ac92-1b269146feab)

### 📋 Your Plan
![Screenshot 2025-05-26 025628](https://github.com/user-attachments/assets/f77f5f34-330c-45f7-93c6-24c5bae3fbd4)

### 🕋 Umrah Guide
![Screenshot 2025-05-26 025633](https://github.com/user-attachments/assets/f76d3ffe-f4a8-43da-bde1-3f9157569986)

- **Umrah Steps**
![Screenshot 2025-05-26 025640](https://github.com/user-attachments/assets/db8eb0e0-9854-4f2c-8831-c605330dd854)

---

## ⚙️ Tech Stack

### Frontend
- **React** with **React Router**
- **React Markdown**
- **React Icons**
- **Firebase Authentication**
- **Vite** (for fast bundling)

### Backend & AI
- **FastAPI** (Python API framework)
- **Uvicorn** (ASGI server for FastAPI)
- **Pydantic** (data validation)
- **OpenAI API** (for itinerary generation)
- **python-dotenv** (environment configuration)

### Database & APIs
- **Firestore** (NoSQL DB for plan storage)
- **Firebase SDKs** (Auth, Firestore, Hosting)

### DevOps & Hosting
- **Firebase Hosting**
- **Cloudflare** (DNS + SSL)
- **GitHub Actions** (CI/CD pipeline)

---

## 🧠 Backend & AI

The backend is built with **FastAPI**, a modern, high-performance Python web framework. It manages user input, AI logic, and route handling.
Personalized Umrah itineraries are generated using the **OpenAI API**, which crafts contextual, day-by-day plans based on user preferences like travel dates, budget, and activity times.

The API runs on **Uvicorn**, an asynchronous server optimized for FastAPI.

The backend can be deployed via **Firebase Cloud Functions**, **Render**, or any modern serverless or container-based platform.

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

- 🌐 Multilingual support (Arabic & English)
- 📱 Progressive Web App (PWA) support for offline access
- 📍 Interactive map of Makkah with ritual landmarks
- 📊 Budget planner: Expense estimator & tracker
- 📂 Export plan as PDF or shareable public link
- 🧾 Smart pilgrim checklist (auto-generates based on your itinerary)
- 💬 AI-powered Q&A assistant for common Umrah questions or rituals

---

## 🧾 License

This project is licensed under the MIT License — you’re free to use, modify, and distribute this project with attribution.
