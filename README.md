<img src="Frontend/assets/ManasikLogo.png" alt="Manasik Logo" width="90" style="vertical-align: middle;"/>  

# Manasik

**Manasik** is a modern web application that helps Muslims plan their Umrah journey with ease. It uses AI to generate personalized itineraries based on your travel dates, preferences, and budget — no need to select predefined tiers.

### 🌐 Live App  
👉 [www.manasikplanner.com](https://www.manasikplanner.com)


---

## 📝 Description

**Manasik Planner** simplifies Umrah trip planning with a smart, AI-driven assistant. Whether you're traveling alone or with family, it builds a complete itinerary that includes spiritual rituals, hotel bookings, and more — all personalized to your needs.

---

## ✨ Features

- 📆 AI-generated Umrah itinerary  
- 🏨 Hotel and flight suggestions tailored to your budget  
- ⏰ Activity time preferences (Morning, Afternoon, Evening, Night)  
- 🔐 User Authentication (Firebase Auth)  
- 📋 Visual guide to performing Umrah  
- 📱 Fully responsive layout  
- 🌍 Multilingual support (coming soon)

---

## 📸 Screenshots

_Add your UI screenshots here_

---

## ⚙️ Tech Stack

### Frontend
- **React**
- **React Router**
- **Firebase Authentication**
- **Tailwind CSS** *(optional)*
- **React Icons**

### Backend
- **FastAPI** (Python)
- **Uvicorn**

### APIs & AI
- **OpenAI API** (for natural language itinerary generation)

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
git clone https://github.com/your-username/manasik-planner.git
cd manasik-planner
