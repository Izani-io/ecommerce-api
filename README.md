A RESTful API built with Node.js, Express, and MongoDB for managing an e-commerce platform.

Features

User Authentication (Register & Login)
JWT-based Authorization
Product Management (Admin only)
Shopping Cart System
Order Management System
Role-based Access Control (User/Admin)

Stack

Node.js
Express.js
MongoDB (Mongoose)
JWT (Authentication)
bcryptjs (Password hashing)

Installation

Clone the repository:
git clone https://github.com/Izani-io/ecommerce-api.git
Navigate into the project:
cd ecommerce-api
Install dependencies:
npm install
Create a .env file and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run the server:
npm run dev

API Endpoints

Auth
POST /api/auth/register
POST /api/auth/login

Products
GET /api/products
GET /api/products/
POST /api/products (Admin)
PUT /api/products/ (Admin)
DELETE /api/products/ (Admin)

Cart
POST /api/cart
GET /api/cart
DELETE /api/cart

Orders
POST /api/orders
GET /api/orders/my
GET /api/orders (Admin)
PUT /api/orders/ (Admin)

Author

Built by Israel Izani