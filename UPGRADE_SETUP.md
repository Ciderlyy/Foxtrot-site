# 🚀 FOXTROT Website Upgrade Setup Guide

## 🎯 **What We've Upgraded**

Your FOXTROT website has been upgraded from a custom authentication system to a **modern, industry-standard stack**:

### **Before (Custom System):**
- ❌ Custom JWT implementation
- ❌ Manual SQL schema management
- ❌ Basic client-side security
- ❌ Limited role management

### **After (Modern Stack):**
- ✅ **NextAuth.js** - Industry-standard authentication
- ✅ **Prisma ORM** - Type-safe database operations
- ✅ **Role-based access control** (ADMIN, TRAINER, VIEWER)
- ✅ **Excel import functionality** for Parade State
- ✅ **Modern dashboard** with real-time data
- ✅ **Professional-grade security**

## 🛠️ **Setup Steps**

### **Step 1: Database Setup**

#### **Option A: Local PostgreSQL (Recommended for Development)**
1. Install PostgreSQL locally
2. Create a new database: `foxtrot_db`
3. Update `.env.local`:
   ```bash
   DATABASE_URL="postgresql://username:password@localhost:5432/foxtrot_db"
   ```

#### **Option B: Supabase (Recommended for Production)**
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Get connection string from Settings > Database
4. Update `.env.local` with your Supabase URL

### **Step 2: Environment Configuration**

1. **Generate NextAuth Secret:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

2. **Update `.env.local`:**
   ```bash
   # Database
   DATABASE_URL="your_postgresql_connection_string"
   
   # NextAuth
   NEXTAUTH_SECRET="your_generated_secret_here"
   NEXTAUTH_URL="http://localhost:3000"
   
   # JWT (keep existing)
   JWT_SECRET="87d677c8cde05c8b1a20d9c55c6095165d8a036a6caabc9a5362acba68c9eeb8"
   ```

### **Step 3: Database Setup**

1. **Push Prisma Schema:**
   ```bash
   npx prisma db push
   ```

2. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

3. **Verify Database:**
   ```bash
   npx prisma studio
   ```

### **Step 4: Import Parade State Data**

1. **Ensure your `Parade State.xlsx` is in the project root**
2. **Run the import script:**
   ```bash
   npm run import:parade
   ```

This will:
- ✅ Import all personnel from Excel
- ✅ Create default admin user: `admin@foxtrot.saf.sg` / `P@ssw0rd`
- ✅ Set up proper database relationships

### **Step 5: Test the System**

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Visit:**
   - `http://localhost:3000` - Home page
   - `http://localhost:3000/login` - Login page
   - `http://localhost:3000/dashboard` - Dashboard (after login)

3. **Login with:**
   - **Email:** `admin@foxtrot.saf.sg`
   - **Password:** `P@ssw0rd`

## 🔐 **New Authentication System**

### **User Roles:**
- **ADMIN** - Full access to all features
- **TRAINER** - Access to training resources
- **VIEWER** - Basic access to public resources

### **Protected Routes:**
- `/dashboard` - Requires authentication
- `/tools` - Requires authentication
- `/resources` - Requires authentication
- `/admin/*` - Requires ADMIN role

### **Security Features:**
- ✅ **Session management** with automatic expiration
- ✅ **Role-based access control**
- ✅ **Audit logging** for all actions
- ✅ **Rate limiting** on authentication attempts
- ✅ **Secure password hashing** with bcrypt

## 📊 **New Features**

### **Dashboard:**
- 📈 **Real-time statistics** (personnel count, duty count)
- 👥 **Personnel management** with status tracking
- 📅 **Duty calendar** with upcoming assignments
- 🎖️ **Role-based access** to different features

### **Excel Integration:**
- 📊 **Automatic import** from Parade State.xlsx
- 🔄 **Update existing** personnel records
- ✅ **Data validation** and error handling
- 📝 **Audit trail** for all imports

### **Personnel Management:**
- 👤 **Individual profiles** with rank and unit
- 📋 **Duty assignments** and scheduling
- 🏥 **Status tracking** (Available, Leave, MC, Deployed)
- 🔍 **Search and filter** capabilities

## 🚨 **Migration Notes**

### **What's Changed:**
1. **Authentication:** Custom JWT → NextAuth.js
2. **Database:** Supabase → Prisma + PostgreSQL
3. **Security:** Basic → Enterprise-grade
4. **UI:** Static → Dynamic with real-time data

### **What's Preserved:**
1. ✅ **All existing pages** and content
2. ✅ **Design and styling**
3. ✅ **Navigation structure**
4. ✅ **Your creator credits**

## 🐛 **Troubleshooting**

### **Common Issues:**

#### **1. Database Connection Error:**
```bash
Error: P1001: Can't reach database server
```
**Solution:** Check your DATABASE_URL in `.env.local`

#### **2. Prisma Client Not Generated:**
```bash
Error: PrismaClient is not generated
```
**Solution:** Run `npx prisma generate`

#### **3. Authentication Not Working:**
```bash
Error: NextAuth configuration error
```
**Solution:** Check NEXTAUTH_SECRET and NEXTAUTH_URL

#### **4. Excel Import Fails:**
```bash
Error: Cannot read Excel file
```
**Solution:** Ensure `Parade State.xlsx` is in project root

### **Reset Database:**
```bash
npx prisma db push --force-reset
npm run import:parade
```

## 🎉 **Congratulations!**

You now have a **professional-grade, enterprise-ready** military personnel management system that includes:

- 🚀 **Modern authentication** with NextAuth.js
- 🗄️ **Type-safe database** operations with Prisma
- 🎖️ **Role-based access control**
- 📊 **Excel data integration**
- 📱 **Responsive dashboard**
- 🔒 **Enterprise security**
- 📈 **Real-time statistics**

This upgrade puts your project at a **senior developer level** and demonstrates advanced full-stack development skills!

## 📞 **Need Help?**

If you encounter any issues:
1. Check the error messages in the terminal
2. Verify your environment variables
3. Ensure PostgreSQL is running
4. Check the Prisma documentation: [pris.ly](https://pris.ly)

**Your upgraded FOXTROT website is now ready for production use!** 🎖️
