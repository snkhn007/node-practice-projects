# 📌 Form Validation & User Details App (Express + EJS)

A full-stack beginner project built using **Node.js, Express, and EJS** that allows users to submit form data, validates input, and displays multiple user entries in a clean card-based UI.

---

## 🚀 Overview

This project demonstrates the complete flow of:
- Taking user input through a form
- Validating it on the client side
- Sending it to the server
- Processing it using Express
- Rendering dynamic data using EJS templates

---

## ✨ Features

- 📝 User form with validation  
- ✅ Client-side validation with error messages  
- ⚙️ Server-side form handling using Express  
- 🔄 Modular routing (`/user`, `/display`)  
- 📦 Data parsing using `express.urlencoded()`  
- 🎯 Dynamic rendering using EJS  
- 🧩 Reusable partials (header, title)  
- 🎨 Card-based UI for displaying multiple users  
- ❌ Custom 404 page  
- 📁 Organized folder structure  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Templating:** EJS  
- **Frontend:** HTML, CSS, JavaScript  

---

## 📂 Project Structure

---

form-validation/
│── app.js
│── routes/
│ ├── user.js
│ └── display.js
│── views/
│ ├── partials/
│ │ ├── header.ejs
│ │ └── title.ejs
│ ├── user.ejs
│ ├── display.ejs
│ ├── submit.ejs
│ └── 404.ejs
│── public/
│ ├── css/
│ │ ├── user.css
│ │ ├── display.css
│ │ ├── submit.css
│ │ └── 404.css
│ └── js/
│ └── userValidation.js

````md

---

## 🔄 Application Flow

1. User visits `/user` → form is displayed  
2. Inputs are validated using JavaScript  
3. Form is submitted to server (`POST /user/submit`)  
4. Data is stored in memory  
5. User is redirected to success page  
6. User can view all entries on `/display`  
7. Each user is shown as a separate card  

---

## 🧠 Key Concepts Practiced

- Express routing and modular routers  
- Middleware (`express.urlencoded`, static files)  
- EJS templating and partials  
- Passing data between routes  
- Rendering dynamic UI  
- Handling multiple data entries  
- Debugging real-world issues  

---

## ⚠️ Limitations

- Data is stored in memory (not persistent)  
- Data resets when server restarts  
- Passwords are stored in plain text (for learning only)  

---

## 🔮 Future Improvements

- Add database (MongoDB / MySQL)  
- Implement authentication  
- Add edit/delete functionality (CRUD)  
- Improve UI/UX further  
- Use sessions for better data handling  

---

## ▶️ Run Locally

```bash
npm install
npm start