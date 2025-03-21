# Round-Robin Coupon Distribution with Admin Panel

## 🚀 Project Overview

This is a **Full-Stack Web Application** that distributes coupons to guest users in a **round-robin** manner while providing an **admin panel** to manage coupons and prevent abuse.

### 🔹 Features

#### **User Side**

- Users can claim coupons **without logging in**.
- Coupons are assigned **sequentially without repetition**.
- Abuse prevention mechanisms:
  - **IP Tracking**: Prevent multiple claims from the same IP within a cooldown period.
  - **Cookie-Based Tracking**: Restrict claims from the same browser session.
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

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
