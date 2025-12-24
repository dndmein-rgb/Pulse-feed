# Pulse-feed ⚡
### A Modern Social Feed Platform for Real-Time Conversations

Pulse-feed is a production-style social feed platform designed for speed, scalability, and a seamless user experience. It bridges the gap between a simple project and a real-world application, featuring secure authentication, high-performance data fetching, and an elegant UI.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18-green.svg)](package.json)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen.svg)](https://www.mongodb.com/)

---

## 🚀 Key Features

* **Optimistic UI:** Instant "Like" and "Follow" updates via **TanStack Query** for a lag-free feel.
* **Secure Auth:** JWT-based authentication using **HTTP-only cookies** to prevent XSS attacks.
* **Media Management:** Seamless image uploads and profile avatar management integrated with **Cloudinary**.
* **Social Graph:** Full follow/unfollow system with personalized feeds and real-time notification tracking.
* **Responsive Design:** A mobile-first UI built with **Tailwind CSS** and **DaisyUI** components.

---

## 🛠 Tech Stack

| Frontend | Backend | DevOps & Tools |
| :--- | :--- | :--- |
| **React 18** | **Node.js** & **Express** | **Cloudinary** (Image Storage) |
| **TanStack Query** (State) | **MongoDB** & **Mongoose** | **JWT** (Security) |
| **Tailwind CSS** | **RESTful API** | **Cookie-Parser** |
| **DaisyUI** | **MVC Architecture** | **Dotenv** |

---

## 📂 Project Architecture



```text
Pulse-feed/
├── frontend/             # React Client
│   ├── src/
│   │   ├── components/   # Reusable UI atoms & organisms
│   │   ├── hooks/        # Custom TanStack Query & Logic hooks
│   │   ├── pages/        # Route-level components
│   │   └── services/     # API abstraction layer
├── backend/              # Express Server
│   ├── controllers/      # Request handlers & logic
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API endpoints
│   └── middleware/       # Auth guards & error handling

Installation and setup:

Clone the repository and install dependencies:

git clone https://github.com/dndmein-rgb/Pulse-feed.git
cd Pulse-feed

Create a .env file inside the backend directory with the following values:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

Run the application locally by starting the backend and frontend in separate terminals:

cd backend
npm install
npm run dev

The backend runs on http://localhost:5000

cd frontend
npm install
npm start

The frontend runs on http://localhost:3000

API overview:

POST    /api/auth/register        Register user  
POST    /api/auth/login           Login user  
POST    /api/posts                Create post  
DELETE  /api/posts/:id            Delete post  
POST    /api/posts/like/:id       Like or unlike post  
POST    /api/users/follow/:id     Follow or unfollow user  
GET     /api/notifications        Fetch notifications  

Screenshots or GIFs should be added to showcase the main feed, user profiles, and the notifications panel.

Planned improvements include real-time chat using WebSockets, user and post search, improved mobile UX, unit and integration testing, and Dockerized deployment with CI/CD.

Contributions are welcome. Fork the repository, create a feature branch, commit clean and logical changes, and open a pull request.

Built with ☕ and poor sleep by dndmein-rgb

If this project inspired you, feel free to ⭐ the repository!

