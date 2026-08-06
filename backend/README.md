# ShopBag - Backend API

The backend REST API for the **ShopBag** e-commerce application. It provides authentication, product management, shopping cart, user queries, and Razorpay payment integration.

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT (JSON Web Tokens) + bcrypt
- **File Upload:** Multer
- **Email:** Nodemailer
- **Payments:** Razorpay
- **Other:** CORS, dotenv

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v24.18.0 or compatible)
- [MongoDB](https://www.mongodb.com/) (local or Atlas connection string)
- A [Razorpay](https://razorpay.com/) account for payment keys
- npm (comes with Node.js)

## 🔧 Installation & Setup

1. **Clone the repository** (or navigate to the `backend` folder):

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and add the variables listed in the [Environment Variables](#-environment-variables) section below.

4. **Start the server:**

   ```bash
   # Production mode
   npm start

   # Development mode (with auto-reload)
   npm run dev
   ```

5. **Verify:**

   The server will run on `http://localhost:5000` (or the port set in `PORT`). You should see:

   ```
   DB Connected Successfully
   Running on port 5000
   ```

## 🔐 Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

| Variable              | Description                                   |
| --------------------- | --------------------------------------------- |
| `PORT`                | Port the server runs on (default: `5000`)     |
| `DB`                  | MongoDB connection string                     |
| `JWT_SECRET`          | Secret key used to sign and verify JWT tokens |
| `RAZORPAY_KEY_ID`     | Razorpay API key ID                           |
| `RAZORPAY_KEY_SECRET` | Razorpay API key secret                       |

> **Note:** Never commit the `.env` file to version control. It is already ignored in `.gitignore`.

## 📁 Project Structure

```
backend/
├── app.js                 # Express server entry point
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (not committed)
├── config/
│   └── db.js              # MongoDB connection logic
├── controller/
│   ├── admin.js           # Admin controllers (products, queries, mail)
│   └── user.js            # User controllers (auth, cart, orders, search)
├── middleware/
│   ├── auth.js            # JWT authentication middleware
│   └── multer.js          # Image upload handling (5MB limit)
├── models/
│   ├── user.js            # User schema
│   ├── product.js         # Product schema
│   ├── cart.js            # Cart schema
│   ├── order.js           # Order schema
│   └── query.js           # Query/support schema
├── public/
│   └── uploads/           # Uploaded product images
├── router/
│   └── api.js             # All API route definitions
└── views/                 # (optional) view files
```

## 📡 API Endpoints

All routes are prefixed with `/api`.

### Health / Base

| Method | Endpoint | Description                 |
| ------ | -------- | --------------------------- |
| GET    | `/`      | Server health check / hello |

### Authentication

| Method | Endpoint     | Description                   |
| ------ | ------------ | ----------------------------- |
| POST   | `/regdata`   | Register a new user           |
| POST   | `/loginuser` | Login and receive a JWT token |

### Products

| Method | Endpoint              | Description                                        |
| ------ | --------------------- | -------------------------------------------------- |
| POST   | `/addadminproduct`    | Add a new product (multipart image)                |
| GET    | `/getproduct`         | Get all products (admin)                           |
| GET    | `/userproducts`       | Get in-stock products (optionally by `?category=`) |
| GET    | `/search?q=keyword`   | Search products by name                            |
| GET    | `/editvaluedata/:abc` | Get a single product for editing                   |
| POST   | `/productupdate/:abc` | Update a product                                   |
| DELETE | `/productdelete/:abc` | Delete a product                                   |

### Cart (requires JWT)

| Method | Endpoint      | Description             |
| ------ | ------------- | ----------------------- |
| POST   | `/cart/save/` | Save the user's cart    |
| GET    | `/cart/:id`   | Get the cart for a user |

### User Queries / Support

| Method | Endpoint                | Description                        |
| ------ | ----------------------- | ---------------------------------- |
| POST   | `/userquery`            | Submit a customer query            |
| GET    | `/userallquery`         | Get all queries (admin)            |
| GET    | `/querysingledata/:abc` | Get a single query (admin)         |
| DELETE | `/querydelete/:abc`     | Delete a query (admin)             |
| POST   | `/mailreply/:abc`       | Reply to a query via email (admin) |

### Payments (Razorpay)

| Method | Endpoint        | Description                                 |
| ------ | --------------- | ------------------------------------------- |
| POST   | `/create-order` | Create a Razorpay order                     |
| POST   | `/verify`       | Verify payment signature and save the order |

### Authentication Requirements

Routes marked with a lock (<span title="Requires JWT">🔒</span>) require a valid JWT token in the `Authorization` header:

```
Authorization: Bearer <your-jwt-token>
```

## 🛠️ Scripts

| Script        | Description                                 |
| ------------- | ------------------------------------------- |
| `npm start`   | Start the server in production mode         |
| `npm run dev` | Start the server with nodemon (auto-reload) |

## 📂 File Uploads

Product images are uploaded via Multer to the `public/uploads` directory. The upload limit is **5MB** per image. Images are served statically from the `/public` folder.

## 🔒 Authentication & Security

- Passwords are hashed using **bcrypt** (10 salt rounds).
- JWT tokens are signed with `JWT_SECRET` and expire after **2 days**.
- Cart routes are protected by the `auth` middleware.

## 📧 Email Support

Admin replies to user queries are sent using **Nodemailer** via Gmail SMTP. The reply also marks the query status as `Read`.

## 🤝 Contributing

Feel free to fork the repository and submit pull requests. Any contributions are welcome.

## 📄 License

This project is licensed under the **ISC License**.
