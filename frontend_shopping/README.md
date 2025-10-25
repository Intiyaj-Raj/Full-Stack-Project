<div align="center">

# 🛒 Shopping Web App

### ✨ A Modern E-Commerce Experience ✨

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
<img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
<img src="https://img.shields.io/badge/License-ISC-green?style=for-the-badge" alt="License" />
---

### 🎯 Empowering seamless shopping experiences with cutting-edge technology

</div>

---

## 🌟 Features

<table>
<tr>
<td width="50%">

### 👥 User Experience

- 🏠 **Dynamic Home Page** - Browse featured products
- 📂 **Smart Categories** - Organized product discovery
- 🛍️ **Shopping Cart** - Seamless cart management
- 🔐 **Authentication** - Secure login & registration
- 💬 **Query System** - 24/7 support contact
- 📱 **Responsive Design** - Perfect on any device

</td>
<td width="50%">

### 👨‍💼 Admin Panel

- 📊 **Dashboard** - Real-time store analytics
- 📦 **Product Management** - Full CRUD operations
- 📧 **Query Management** - Customer support hub
- 🔒 **Admin Security** - Protected admin access
- ✏️ **Edit Products** - Quick product updates
- 📨 **Reply System** - Direct customer communication

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose | Version |
|------------|---------|---------|
| ⚛️ **React** | Frontend Framework | 19.x |
| ⚡ **Vite** | Build Tool & Dev Server | 5.x |
| 🎨 **Tailwind CSS** | Utility-First Styling | 3.x |
| 🧭 **React Router** | Client-Side Routing | Latest |
| 🎯 **React Icons** | Icon Library | Latest |
| 🔥 **React Hot Toast** | Notification System | Latest |
| 📝 **ESLint** | Code Quality & Linting | Latest |

</div>

---

## 🚀 Quick Start

### 📋 Prerequisites

Before you begin, ensure you have:

```bash
✓ Node.js (v16 or higher)
✓ npm or yarn package manager
✓ Git (for cloning)
```

### ⚙️ Installation

**1️⃣ Clone the Repository**

```bash
git clone <your-repository-url>
cd frontend_shopping
```

**2️⃣ Install Core Dependencies**

```bash
npm install
```

**3️⃣ Setup Tailwind CSS**

```bash

```

**4️⃣ Install Additional Packages**



```bash
2. forntend setup

Router DOM Install
command: npm i react-router-dom

tailwind
command: npm install -D tailwindcss@3 postcss autoprefixer
command: npx tailwindcss init -p

React icon 
command: npm install react-icons
npm install react-hot-toast
```

```bash
1. backend setup 

command: npm i express nodemon mongoose cors dotenv
command: npm i mongoose
command: npm i cors
command: npm i bcrypt

add nodemon in package.json file 
"serverRun":"nodemon app.js" (in script section) 

```




**5️⃣ Configure Environment**

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_endpoint_here
```

**6️⃣ Launch Development Server**

```bash
npm run dev
```

🎉 **Success!** Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 📖 Project Structure

```
frontend_shopping/
│
├── 📁 public/
│   └── vite.svg
│
├── 📁 src/
│   │
│   ├── 👨‍💼 admin/           # Admin Dashboard Components
│   │   ├── AddProducts.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminProducts.jsx
│   │   ├── AdminQuery.jsx
│   │   ├── EditProducts.jsx
│   │   ├── QueryReply.jsx
│   │   └── Slidebar.jsx
│   │
│   ├── 🖼️ assets/          # Static Assets
│   │   ├── logo.png
│   │   └── react.svg
│   │
│   ├── 🧩 components/      # Reusable Components
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── Product.jsx
│   │   └── Reg.jsx
│   │
│   ├── 📄 pages/           # Route Pages
│   │   ├── Cart.jsx
│   │   ├── Category.jsx
│   │   ├── HomePage.jsx
│   │   └── Query.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── ⚙️ Configuration Files
├── .gitignore
├── eslint.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Start development server |
| `npm run build` | 📦 Build for production |
| `npm run lint` | 🔍 Run ESLint checks |
| `npm run preview` | 👀 Preview production build |

---

## 🗺️ Application Routes

### 👥 User Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | 🏠 Main landing page |
| `/cart` | Cart | 🛒 Shopping cart |
| `/login` | Login | 🔐 User authentication |
| `/reg` | Registration | 📝 New user signup |
| `/query` | Query | 💬 Support contact |
| `/category` | Category | 📂 Product categories |

### 👨‍💼 Admin Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/admin/dashboard` | AdminDashboard | 📊 Admin overview |
| `/admin/adminproduct` | AdminProducts | 📦 Manage products |
| `/admin/add-products` | AddProducts | ➕ Add new products |
| `/admin/edit-products/:id` | EditProducts | ✏️ Edit existing products |
| `/admin/query` | AdminQuery | 📧 View user queries |
| `/admin/reply/:id` | QueryReply | 📨 Reply to queries |

---

## 💻 Development Guidelines

### ✅ Best Practices

- 📝 **Code Quality**: Use ESLint for consistent code style
- ⚛️ **React Patterns**: Follow React hooks and component best practices
- 🎨 **Styling**: Utilize Tailwind CSS utility classes
- 📱 **Responsiveness**: Mobile-first design approach
- 🧪 **Testing**: Test all components and routes thoroughly
- 🔒 **Security**: Implement proper authentication checks
- ♿ **Accessibility**: Follow WCAG guidelines

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. ✍️ **Commit** your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. 📤 **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. 🎉 **Open** a Pull Request

### 📋 Contribution Guidelines

- Write clear commit messages
- Follow the existing code style
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass before submitting

---

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? We'd love to hear from you!

- 🐛 **Bug Reports**: Use the query system in the app
- 💡 **Feature Requests**: Open an issue on GitHub
- 💬 **Questions**: Contact the development team

---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- React Team for the amazing framework
- Vite for blazing fast development
- Tailwind CSS for beautiful styling
- All our contributors and supporters

---

<div align="center">

### Screenshot 
<img width="2047" height="1254" alt="Image" src="https://github.com/user-attachments/assets/d127d824-d21a-4472-8280-0894951f4fb6" />
<img width="2047" height="1254" alt="Image" src="https://github.com/user-attachments/assets/0aef404d-3a7a-48e6-91b7-464d4066cd42" />
<img width="2047" height="1254" alt="Image" src="https://github.com/user-attachments/assets/607a9157-d33e-492c-86e6-016960110859" />
<img width="2047" height="1254" alt="Image" src="https://github.com/user-attachments/assets/ea4dd77a-ef10-4965-aa76-5fedea15f06a" />
<img width="2047" height="1254" alt="Image" src="https://github.com/user-attachments/assets/15aa5a0f-6b09-4dec-8328-dbacebe188fa" />
<img width="2047" height="1254" alt="Image" src="https://github.com/user-attachments/assets/8f105705-ecb0-4bc6-94d9-f9562c19a44f" />
<img width="2047" height="1254" alt="Image" src="https://github.com/user-attachments/assets/0a366b63-118f-4761-ab0d-6b0bff0b0555" />
### 🌟 Star this repo if you find it useful! 🌟

**Made with ❤️ by the Intiyaj Raj**

[⬆ Back to Top](#-frontend-shopping)

</div>
