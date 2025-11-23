PulseFeed

A full-stack social platform inspired by Twitter. Create posts, like, follow users, get real-time notifications, update profiles, and explore clean UI interactions. Built with React, Node.js, Express, MongoDB, and TanStack Query.

Features

User authentication (JWT, secure cookies)

Create, delete, like posts

Follow and unfollow users

Notifications for follows and likes

Profile editing with image upload

Feed filters (Posts / Likes)

Responsive UI with Tailwind

Optimistic updates using React Query

Tech Stack

Frontend: React, React Router, TanStack Query, Tailwind, DaisyUI
Backend: Node.js, Express, MongoDB, Mongoose
Auth: JWT + HTTP-only cookies

Environment Variables

Create a .env file in the server folder:

MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
PORT=5000
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
Installation

Clone the repo:

git clone https://github.com/your-username/pulsefeed.git
cd pulsefeed
