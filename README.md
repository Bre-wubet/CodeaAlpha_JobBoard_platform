### Job Board Platform

A full-featured job board web application built with Express.js, MongoDB, and Mongoose following the MVC architecture. It supports job listings, employer and candidate profiles, resume uploads, job applications, and an admin panel with analytics.

## Features

### Core Functionality
-  Post, update, and delete job listings
-  Search/filter jobs by title, tags, location, and salary
-  Employer & Candidate profile management
-  Resume upload & storage
-  Job application system with status tracking

### Authentication & Authorization
- JWT-based secure login
- Role-based access control: admin, employer, candidate

### Admin Panel (API)
- Manage users and roles
- Application/job stats

### Tech Stack

 Backend      - Node.js, Express.js
 Database     - MongoDB, Mongoose 
 Auth         - JWT, bcrypt 
 File Uploads - Multer   

## Folder structure

  job-board-platform/
  
- config/ - DB connection, environment setup
- controllers/ - Route logic for users, jobs, apps, admin
- models/ - Mongoose schemas
- routes/ - Express route definitions
- middlewares/ - Authentication, role-checking, error handlers
- services/ - Business logic helpers (file, search, stats)
- uploads/ - Uploaded resume files
- app.js # App initialization
- server.js # Entry point
- README.md



## Installation

### 1. Clone the repository

...bash
[git clone https://github.com/Bre-wubet/CodeaAlpha_JobBoard_platform.git
cd job-board-platform
2. Install dependencies
...bash
npm install
3. Set up environment variables

.env
- PORT=5000
- MONGO_URI=your mongodb uri
- JWT_SECRET=your_jwt_secret
- MAIL_USER=your_email@example.com
- MAIL_PASS=your_email_password

4. Start the development server
...bash
npm run dev


### API Endpoints

## Auth routes
 - POST [/api/auth/register]
 - POST [/api/auth/login]
 - GET [/api/auth/me]

## Admin routes
 - GET  [/api/admin/users/:id] get user by id
 - GET  [/api/admin/jobs/statistics] get job stats with their applications
 - GET  [/api/admin/users] get all users
 - PUT  [/api/admin/users/:id/role] update user role by user id
 - DELETE  [/api/admin/users/:id]

## Job routes
 - GET [/api/jobs?title=developer&location=remote]
 - GET [/api/jobs/search]
 - POST [/api/jobs]       # (employer only) poat job
 - PUT [/api/jobs/:id]    # (employer only) Update job
 - DELETE [/api/jobs/:id] # (employer only)

## Employer routes for employer only
 - GET  [/api/employers/:id] find jobs by id
 - PUT  [/api/employers/:id]  update employer profile
 - GET [/api/employers/:id/jobs] find job by employer id

## Candidate routes for candidate role only
 - GET  [/api/candidates/:id] get candidate by id
 - GET  [/api/candidates/:id/applied-jobs] taracking applied jobs
 - PUT  [/api/candidates/:id] update candidate profile
 - POST [/api/candidates/:id/resume] post resume by candidate

## Application routes
 - POST [/api/applications/] apply for job #(candidate only)
 - GET [/api/applications/]   get application by id # (employer only)
 - GET  [/api/applications/:id] get application by id
 - DELETE  [/api/applications/:id] delete application by id
 - PUT [/api/applications/:id/status] update application status # (employer only)

 ## Contributor
 Brhina Wubet - Developer 
