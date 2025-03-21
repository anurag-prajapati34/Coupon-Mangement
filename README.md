# Round-Robin Coupon Distribution with Admin Panel

## 🚀 Project Overview

This is a **Full-Stack Web Application** that distributes coupons to guest users in a **round-robin** manner while providing an **admin panel** to manage coupons and prevent abuse.

### 🔹 Features

#### **User Side**

- Users can claim coupons **without logging in**.
- Coupons are assigned **sequentially without repetition**.
- Abuse prevention mechanisms:
  - **IP Tracking**: Prevent multiple claims from the same IP within a cooldown period.
 
- Displays messages for **successful claims or time restrictions**.

#### **Admin Panel**

- **Secure Login** for admin access.
- **View Coupons**: List all available and claimed coupons.
- **Add/Update Coupons**: Upload new coupons or modify existing ones.
- **User Claim History**: Track which users (IP/browser session) claimed coupons.
- **Toggle Coupon Availability**: Enable/disable specific coupons dynamically.

### 🔧 Tech Stack

- **Frontend:** React.js (Vite) + Tailwind CSS
- **Backend:** Express.js + Node.js
- **Database:** MongoDB
- **Deployment:**
  - **Frontend:** Vercel
  - **Backend:** Render

---

## 🛠️ Project Setup

###  **Clone the Repository**

git clone https://github.com/anurag-prajapati34/Coupon-Mangement.git

### Backend Setup
<p>1. cd backend</p>
<p>2. npm install</p>
<p>2. npm start</p>



### Backend Setup
<p>1. cd backend</p>
<p>2. npm install</p>
<p>2. npm start</p>
<p>3.  create <b>.env</b> file and replace mongodb uri with your original uri,  MONGO_URI=your_mongodb_connection_string
PORT=5000

</p>



### Frontend Setup
<p>1. cd frontend</p>
<p>2. npm install</p>
<p>2. npm run dev</p>
<p>3.  create <b>.env</b> file ,  VITE_SERVER_URL=http://localhost:5000
</p>



### links
<h3>Live url: <a href="https://coupon-management-u48u.vercel.app/" alt="coupon mangement" /></h3>
```sh



