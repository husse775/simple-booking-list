# Simple Booking API

A simple booking system built with Node.js, Express, MongoDB Atlas, and JWT authentication.

## Features

- User registration and login
- JWT-based authentication
- Create and view bookings
- Secure password hashing with bcryptjs

## Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

## Getting Started

### Clone repository

git clone https://github.com/YOUR_USERNAME/simple-booking-api.git
cd simple-booking-api


### Install dependencies

npm install

### Create .env file

Before running the app, create a `.env` file in the project root:

PORT=5000
MONGO_URI=your_mongo_uri_here
JWT_SECRET=your_secret_here


### Start the server

npm start


The server will run on:

http://localhost:5000


## API Endpoints

### Auth

#### Register

POST /api/auth/register
Body: { "username": "yourname", "password": "yourpassword" }


#### Login

POST /api/auth/login
Body: { "username": "yourname", "password": "yourpassword" }
Response: { "token": "your_jwt_token" }


### Bookings (authorization required)

#### Create booking

POST /api/bookings
Headers: Authorization: Bearer <token>
Body: { "room": "Room 1", "date": "2025-06-15T10:00:00Z" }


#### Get bookings

GET /api/bookings
Headers: Authorization: Bearer <token>

csharp

## Note

You need a free MongoDB Atlas account to get your MONGO_URI.

