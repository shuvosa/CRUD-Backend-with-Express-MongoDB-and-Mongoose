# CRUD-Backend-with-Express-MongoDB-and-Mongoose



This project is a simple backend server built with Node.js, Express, and MongoDB (using Mongoose). It provides a REST API to fetch user data.

## Features

- Connects to MongoDB using Mongoose
- REST API endpoint to fetch all user data
- CORS enabled for cross-origin requests

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account (or local MongoDB)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/shuvosa/CRUD-Backend-with-Express-MongoDB-and-Mongoose.git
   cd CRUD-Backend-with-Express-MongoDB-and-Mongoose
2.Install dependencies:
  ```sh
     npm install
```
3.Update the MongoDB connection string in index.js if needed.

Running the Server

For development (with auto-reload):
  ```sh
   npm run dev
```
For production:
 ```sh
  npm start
```
The server will run on http://localhost:5000 by default.

API Endpoints
GET /api/data
Fetch all user data from the database.





