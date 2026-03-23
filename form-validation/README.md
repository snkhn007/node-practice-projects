# 📌 Form Validation & Data Display (Express + EJS)

A beginner-friendly full-stack project built using **Node.js, Express, and EJS** to practice form handling, routing, and dynamic rendering.

---

## 🚀 Overview

This project demonstrates how a user form is created, validated, submitted to the server, and then displayed dynamically using EJS templates.

---

## ✨ Features

- 📝 User input form  
- ✅ Client-side validation (JavaScript)  
- ⚙️ Server-side processing (Express)  
- 🔄 Routing using modular routers  
- 📦 Parsing form data using `express.urlencoded()`  
- 🎯 Dynamic rendering using EJS  
- 🎨 Static file handling (CSS & JS via `public/`)  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- EJS  
- HTML, CSS, JavaScript  

---

## 📂 Project Structure
form-validation/
│── app.js
│── routes/
│ ├── user.js
│ └── display.js
│── views/
│ ├── user.ejs
│ ├── display.ejs
│ └── 404.ejs
│── public/
│ ├── css/
│ └── js/


---

## 🔄 Application Flow

1. User visits `/user` → form page is rendered  
2. User fills the form → client-side validation runs  
3. Form is submitted to server (`POST /user/submit`)  
4. Server parses the data  
5. User is redirected to `/display`  
6. Data is rendered dynamically using EJS  

---

## 🧠 Key Concepts Learned

- Express routing and middleware  
- Static file serving  
- Difference between `res.sendFile()` and `res.render()`  
- Passing data to templates  
- Handling data across routes  
- Debugging path and rendering issues  

---

## ⚠️ Limitations

- Data is stored in memory (not persistent)  
- Data resets when server restarts  
- No database integration yet  

---

## 🔮 Future Improvements

- Add database (MongoDB / MySQL)  
- Add authentication  
- Improve UI (cards/layout)  
- Add edit/delete functionality  
- Store multiple users properly  

---

## ▶️ Run Locally

```bash
npm install
npm start