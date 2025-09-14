# 🤖 Companion Hub  

A web app where you can create and interact with AI-powered companions for quick learning, discussions, and research. Whether you want a short 30–60 second teaching session, to clarify an English term, have a raw discussion, or even study with a virtual buddy — Companion Hub gives you a dedicated companion for each topic.  

---

## ✨ Features  

- **Authentication with Clerk**  
  Secure sign up, login, and logout with [Clerk](https://clerk.com).  
  - Without authentication, users **cannot access companions**.  

- **Explore Companions**  
  - Discover the best companions on the homepage.  
  - Search and filter companions by category.  

- **Companion Page**  
  - View all listed companions.  
  - Sort and filter by search or category.  

- **Profile Page**  
  - Track how many companions you’ve created.  
  - View all your records in one place.  

- **Billing & Subscriptions**  
  - Integrated **Clerk Billing** for paid service plans.  
  - Upgrade for premium access to advanced companions and features.  

- **Voice Integration with Vapi**  
  - Engage in **real-time voice conversations** with your companions.  
  - Perfect for discussions, research, or practice sessions.  

---

## 🛠️ Tech Stack  

- **Frontend:** React, TailwindCSS  
- **Backend:** Next.js  
- **Database:** Supabase  
- **Auth & Billing:** Clerk  
- **Voice Engine:** Vapi  

---

## 🚀 Why This App?  

Many times, you want:  
- A quick **30–60 sec explanation** on a specific topic.  
- To understand a tricky **English term**.  
- A **raw discussion** with a buddy or friend.  
- A companion to help with **study or research** when friends aren’t available.  

This app solves that by letting you create **companions for each purpose** — teaching, tech, research, or casual discussion — and interact with them anytime.  

---

## Screenshots 
<img width="1733" height="1501" alt="image" src="https://github.com/user-attachments/assets/952f264b-c0cc-4634-8e0b-4426231cce67" />

<img width="1733" height="952" alt="image" src="https://github.com/user-attachments/assets/250e692f-8a76-4ff8-b24e-60c4e75233be" />

<img width="1733" height="944" alt="image" src="https://github.com/user-attachments/assets/7a5e8561-5bb5-42a8-8328-bc73a0dad4b8" />

<img width="1733" height="944" alt="image" src="https://github.com/user-attachments/assets/55e1cdfc-f056-4384-b025-559c4ea13c2a" />

<img width="1919" height="796" alt="image" src="https://github.com/user-attachments/assets/35f8bc6c-e920-44b4-b622-441c28f59e47" />


## ⚡ Installation & Setup  

Follow these steps to run Companion Hub locally:  

### 1. Clone the Repository  
```bash
git clone https://github.com/your-username/companion-hub.git
cd companion-hub
```

### 2. Setup Environment Variables

Create a .env.local file in the project root and add:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_example1234567890
CLERK_SECRET_KEY=sk_test_example1234567890

# Clerk - Custom Auth Setup
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase config
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=example-vapi-web-token-123456

# Sentry (optional)
SENTRY_AUTH_TOKEN=example-sentry-token-123456
```

scrrenshot :
Vudeo link : https://drive.google.com/file/d/1_qnAkDCt99n3TGAg6MqT0AEcENC-TR1Q/view?usp=drive_link
