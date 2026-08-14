<div align="center">

# 🛒 ShopBag — Full-Stack E-Commerce App

A modern MERN-based e-commerce platform with a customer storefront and a full-featured admin panel.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](#)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![License](https://img.shields.io/badge/License-ISC-green?style=for-the-badge)](#)

**[🔗 Live Demo](https://shopbag-ecommerce-webapp.vercel.app/)**

</div>

---

## ✨ Overview

ShopBag is a complete online shopping solution — customers can browse products, manage a cart, and check out with Razorpay, while admins manage inventory, orders, and support queries from a dedicated dashboard.

## 🌟 Features

**Customer**

- Dynamic homepage with featured products & categories
- Product search and category browsing
- Shopping cart with Redux Toolkit state management
- Secure authentication (JWT-based login/registration)
- Razorpay checkout integration
- Support query system

**Admin Panel**

- Real-time dashboard analytics
- Full product CRUD (add, edit, delete) with Cloudinary image uploads
- Customer query management with email replies
- Protected admin routes

## 🛠️ Tech Stack

| Layer         | Technology                                                                 |
| ------------- | -------------------------------------------------------------------------- |
| Frontend      | React 19, Vite, Tailwind CSS, React Router, Redux Toolkit, React Hot Toast |
| Backend       | Node.js, Express.js                                                        |
| Database      | MongoDB (Mongoose)                                                         |
| Auth          | JWT + bcrypt                                                               |
| Image Storage | Cloudinary                                                                 |
| Payments      | Razorpay                                                                   |
| Email         | Brevo (Sendinblue)                                                         |

## 📁 Project Structure

```
shopbag/
├── frontend/
│   └── src/
│       ├── admin/          # Admin dashboard components
│       ├── components/     # Reusable UI components
│       ├── pages/          # Route pages
│       └── ...
└── backend/
    ├── app.js              # Express entry point
    ├── config/             # DB & Cloudinary config
    ├── controller/         # Route controllers
    ├── middleware/         # Auth & upload middleware
    ├── models/             # Mongoose schemas
    └── router/             # API routes
```

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- Cloudinary account
- Razorpay account
- Brevo account (for transactional email)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs at `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Runs at `http://localhost:5000`

### Environment Variables

**Frontend** (`.env`)

```env
VITE_API_URL=your_api_endpoint_here
```

**Backend** (`.env`)

```env
PORT=5000
DB=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

BREVO_API_KEY=your_brevo_api_key
BREVO_SENDER_EMAIL=your_verified_sender_email
```

> Never commit `.env` files — they're already excluded via `.gitignore`.

## 🗺️ Routes

**User:** `/`, `/cart`, `/login`, `/reg`, `/query`, `/category`

**Admin:** `/admin/dashboard`, `/admin/adminproduct`, `/admin/add-products`, `/admin/edit-products/:id`, `/admin/query`, `/admin/reply/:id`

## 📡 API Reference

All endpoints are prefixed with `/api`.

| Category | Method | Endpoint               | Description                      |
| -------- | ------ | ---------------------- | -------------------------------- |
| Auth     | POST   | `/regdata`             | Register a new user              |
| Auth     | POST   | `/loginuser`           | Login, returns JWT               |
| Products | POST   | `/addadminproduct`     | Add product (image → Cloudinary) |
| Products | GET    | `/getproduct`          | Get all products (admin)         |
| Products | GET    | `/userproducts`        | Get in-stock products            |
| Products | GET    | `/search?q=`           | Search products                  |
| Products | GET    | `/editvaluedata/:id`   | Get single product               |
| Products | POST   | `/productupdate/:id`   | Update product                   |
| Products | DELETE | `/productdelete/:id`   | Delete product                   |
| Cart 🔒  | POST   | `/cart/save`           | Save user cart                   |
| Cart 🔒  | GET    | `/cart/:id`            | Get user cart                    |
| Queries  | POST   | `/userquery`           | Submit a query                   |
| Queries  | GET    | `/userallquery`        | Get all queries (admin)          |
| Queries  | GET    | `/querysingledata/:id` | Get single query                 |
| Queries  | DELETE | `/querydelete/:id`     | Delete query                     |
| Queries  | POST   | `/mailreply/:id`       | Reply via Brevo email            |
| Payments | POST   | `/create-order`        | Create Razorpay order            |
| Payments | POST   | `/verify`              | Verify payment signature         |

🔒 Requires `Authorization: Bearer <token>` header.

## 🔒 Security

- Passwords hashed with bcrypt (10 salt rounds)
- JWT tokens expire after 2 days
- Cart routes protected via auth middleware

## 📷 Screenshots

**Admin Panel**

<img width="1919" height="916" alt="Admin 1" src="https://github.com/user-attachments/assets/e0ec5d1e-fc9a-4c85-98f1-61d1da9bcf08" />
<img width="1919" height="919" alt="Admin 2" src="https://github.com/user-attachments/assets/b8942004-4e16-408f-9994-78dfe3b3460c" />
<img width="1919" height="808" alt="Admin 3" src="https://github.com/user-attachments/assets/10677b7f-1819-44ee-aff8-bb63f15b3bc1" />

## 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

Licensed under the **ISC License**.

---

<div align="center">

**Made with ❤️ by [Intiyaj Raj](https://intiyajansarifullstackdeveloper.netlify.app/)**

</div>
