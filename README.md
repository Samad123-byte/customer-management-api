# 🔐 Secure Auth API

A secure backend REST API built with Node.js and Express that provides user authentication, authorization, and customer management using JWT, cookies, and bcrypt.

---

## 🚀 Features

* User Signup & Login Authentication
* JWT-based Authentication
* Secure Cookie Handling
* Password Hashing with bcrypt
* Protected Routes (Middleware)
* Full CRUD Operations for Customers
* Error Handling & Validation

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (JSON Web Token)
* bcryptjs
* dotenv

---

## 🔒 Security Features

* Passwords are hashed before storing in the database
* JWT tokens are used for authentication
* Protected routes restrict unauthorized access
* Cookies are used for secure session management

---

## 📁 Project Structure

```
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
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/secure-auth-api.git
cd secure-auth-api
```

### 2. Install dependencies

```
npm install
```

### 3. Create a .env file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server

```
npm run dev
```

---

## 📌 API Endpoints

### 🔑 Auth Routes

| Method | Endpoint          | Description   |
| ------ | ----------------- | ------------- |
| POST   | /api/users/signup | Register user |
| POST   | /api/users/login  | Login user    |
| POST   | /api/users/logout | Logout user   |

---

### 👤 Customer Routes (Protected)

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /api/customers     | Get all customers |
| POST   | /api/customers     | Create customer   |
| PUT    | /api/customers/:id | Update customer   |
| DELETE | /api/customers/:id | Delete customer   |

---

## 🧪 Testing

You can test the API using:

* Postman
* Thunder Client (VS Code Extension)

Make sure to include cookies for protected routes.

---

## 📸 Sample Request (Signup)

```
POST /api/users/signup
```

Body:

```
{
  "userName": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

---

## 🧠 Future Improvements

* Role-based authentication (Admin/User)
* Input validation using Joi
* Rate limiting & security enhancements
* Refresh token implementation

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🙌 Author

Developed by Abdul Sammad Khan
