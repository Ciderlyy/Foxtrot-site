# 🚀 Full-Stack Backend Setup Guide

## 🎯 **What We've Built**

✅ **Database Schema** - Users, access logs, security tables  
✅ **API Routes** - Login, protected endpoints  
✅ **Authentication** - JWT tokens, middleware  
✅ **Security** - Rate limiting, audit trails  
✅ **Frontend Integration** - Updated password protection  

## 🗄️ **Step 1: Set Up Supabase Database (FREE)**

### **1.1 Create Supabase Account**
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" (FREE)
3. Sign up with GitHub/Google
4. Create new project

### **1.2 Get Database Credentials**
1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon Key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Service Role Key** → `SUPABASE_SERVICE_ROLE_KEY`

### **1.3 Run Database Schema**
1. Go to **SQL Editor** in Supabase
2. Copy and paste the contents of `database/schema.sql`
3. Click "Run" to create tables

## 🔧 **Step 2: Configure Environment Variables**

### **2.1 Create .env.local file**
```bash
# Copy env.example to .env.local
cp env.example .env.local
```

### **2.2 Update .env.local with your values**
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# JWT Secret (generate a random string)
JWT_SECRET=your_super_secret_jwt_key_here_2024_foxtrot_saf

# Database Configuration
DATABASE_URL=postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres
```

### **2.3 Generate JWT Secret**
```bash
# Generate a random 32-character string
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 👤 **Step 3: Create Admin User**

### **3.1 Hash Password for Admin**
```bash
# Install bcrypt globally
npm install -g bcryptjs

# Create hash for "P@ssw0rd"
node -e "
const bcrypt = require('bcryptjs');
bcrypt.hash('P@ssw0rd', 10).then(hash => console.log(hash));
"
```

### **3.2 Update Database with Admin User**
1. Go to Supabase **SQL Editor**
2. Run this SQL (replace `$2a$10$...` with your hash):
```sql
UPDATE users 
SET password_hash = '$2a$10$your_hashed_password_here'
WHERE username = 'admin';
```

## 🚀 **Step 4: Test the System**

### **4.1 Start Development Server**
```bash
npm run dev
```

### **4.2 Test Authentication**
1. Go to `/tools` or `/resources`
2. Login with:
   - **Username:** `admin`
   - **Password:** `P@ssw0rd`

### **4.3 Test Protected API**
```bash
# Get JWT token from login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"P@ssw0rd"}'

# Use token to access protected endpoint
curl -X GET http://localhost:3000/api/protected \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔒 **Security Features Implemented**

✅ **Server-side authentication** - No client-side password validation  
✅ **JWT tokens** - Secure session management  
✅ **Rate limiting** - 5 attempts before 15-minute lockout  
✅ **Audit logging** - Track all access attempts  
✅ **IP logging** - Monitor suspicious activity  
✅ **Password hashing** - bcrypt with salt  
✅ **Session expiration** - 2-hour timeout  

## 📊 **Database Tables Created**

| Table | Purpose | Fields |
|-------|---------|---------|
| **users** | User accounts | username, password_hash, rank, unit |
| **access_logs** | Audit trail | user_id, action, page, IP, timestamp |
| **failed_logins** | Security monitoring | username, IP, timestamp |

## 🌐 **Deployment (FREE)**

### **Vercel Deployment**
1. Push code to GitHub
2. Connect to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy! 🎉

### **Environment Variables in Vercel**
- Go to **Settings** → **Environment Variables**
- Add all variables from `.env.local`

## 🧪 **Testing Checklist**

- [ ] Database connection works
- [ ] Admin user can login
- [ ] JWT token is generated
- [ ] Protected pages require auth
- [ ] Rate limiting works
- [ ] Audit logs are created
- [ ] Session expiration works
- [ ] Logout clears session

## 🆘 **Troubleshooting**

### **Common Issues:**
1. **"Invalid credentials"** - Check password hash in database
2. **"Database connection failed"** - Verify Supabase credentials
3. **"JWT secret missing"** - Check JWT_SECRET in .env.local

### **Need Help?**
- Check browser console for errors
- Verify Supabase connection
- Ensure all environment variables are set

## 🎉 **You're Now Full-Stack!**

Your military website now has:
- **Professional authentication system**
- **Secure database backend**
- **Audit trails for compliance**
- **Production-ready hosting**
- **Zero monthly cost** 🚀

---

**Created by: 3SG KOH JER MING**  
**GitHub: @Ciderlyy**  
**Technology: Next.js + Supabase + JWT**
