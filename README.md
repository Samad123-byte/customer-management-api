🔐 Secure Auth API

A secure backend REST API built with Node.js and Express that provides user authentication, authorization, and customer management using JWT, cookies, and bcrypt.

🚀 Features
User Signup & Login Authentication
JWT-based Authentication
Secure Cookie Handling
Password Hashing with bcrypt
Protected Routes (Middleware)
Full CRUD Operations for Customers
Error Handling & Validation
🛠️ Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
JWT (JSON Web Token)
bcryptjs
dotenv
🔒 Security Features
Passwords are hashed before storing in the database
JWT tokens are used for authentication
Protected routes restrict unauthorized access
Cookies are used for secure session management
📁 Project Structure
├── src
│   ├── config        # Database connection
│   ├── controllers   # Route logic
│   ├── middleware    # Auth middleware
│   ├── models        # Mongoose schemas
│   ├── routes        # API routes
│   ├── lib           # Utility functions (JWT, cookies)
│
├── .env
├── index.js
