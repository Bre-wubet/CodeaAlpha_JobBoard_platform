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

## Tech Stack

| Layer         | Technology                 |
|---------------|-----------------------------|
| Backend       | Node.js, Express.js         |
| Database      | MongoDB, Mongoose           |
| Auth          | JWT, bcrypt                 |
| File Uploads  | Multer                      |
| Documentation | Swagger (OpenAPI)           |
| Testing       | Jest, Supertest             |

## Folder structure

  job-board-platform/
  
├── config/ - DB connection, environment setup
├── controllers/ - Route logic for users, jobs, apps, admin
├── models/ - Mongoose schemas
├── routes/ - Express route definitions
├── middlewares/ - Authentication, role-checking, error handlers
├── services/ - Business logic helpers (file, search, stats)
├── uploads/ - Uploaded resume files
├── app.js # App initialization
├── server.js # Entry point
└── README.md



## Installation

### 1. Clone the repository

...bash
git clone https://github.com/your-username/job-board-platform.git
cd job-board-platform
2. Install dependencies
...bash
npm install
3. Set up environment variables

.env
PORT=5000
MONGO_URI=your mongodb uri
JWT_SECRET=your_jwt_secret
MAIL_USER=your_email@example.com
MAIL_PASS=your_email_password

4. Start the development server
...bash
npm run dev


### API Endpoints
## Auth

POST /api/auth/register
POST /api/auth/login
GET /api/auth/me

## Jobs

GET /api/jobs?title=developer&location=remote
POST /api/jobs/                 # (employer only)
PUT /api/jobs/:id               # (employer only)
DELETE /api/jobs/:id            # (employer only)

## Applications
 
 POST /api/applications/         # (candidate only)
 GET /api/applications/          # (employer)
 PUT /api/applications/:id/status  # (employer only)

 ## Contributors

 | Name       | Role           |
| ---------- | -------------- |
| Brhina Wubet | Lead Developer |
