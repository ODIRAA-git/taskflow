# TaskFlow

A full-stack team collaboration and project management platform for organising projects and tracking tasks.

> **Status:** in active development. Live demo coming after deployment.

## Screenshots

![Homepage](docs/screenshots/taskflowHomepage.png)
![Dashboard](docs/screenshots/taskflowDashboardpage.png)
![Task activities](docs/screenshots/taskflowTaskPage.png)

## Features

- Create, edit and delete projects
- Create, edit, delete and update the status of tasks
- Dashboard with project and task overview
- REST API with request validation and error handling (invalid IDs, not-found cases)
- Frontend connected to the backend API

## Tech stack

**Frontend:** React, TypeScript, Vite, Tailwind CSS, React Router
**Backend:** Node.js, Express
**Database:** PostgreSQL with Prisma ORM

## Getting started

**Prerequisites:** Node.js and a running PostgreSQL database.

```bash
# Clone the repo
git clone https://github.com/ODIRAA-git/taskflow.git
cd taskflow

# Backend
cd backend
npm install
# create a .env file with your DATABASE_URL (see below)
npx prisma migrate dev
npm run dev

# Frontend (in a second terminal)
cd frontend
npm install
npm run dev
```

**Environment variables (backend `.env`):**

```
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/taskflow"
```

## API overview

| Resource | Endpoints |
|----------|-----------|
| Projects | `GET`, `POST`, `PUT`, `DELETE` |
| Tasks    | `GET`, `POST`, `PUT`, `DELETE` |

## Roadmap

- [x] Projects and Tasks CRUD (frontend and REST API)
- [x] PostgreSQL schema, migrations and seed data with Prisma
- [ ] Authentication (JWT) and protected routes
- [ ] Interactive Kanban board with drag-and-drop
- [ ] Dashboard connected to real data
- [ ] Team invitations, roles and permissions
- [ ] Automated tests and API documentation
- [ ] Deployment

## Author

**Madu Odiraa Perpetua**: [LinkedIn](https://www.linkedin.com/in/madu-o-717713216/) · [Portfolio](https://odiraamaduportfolio.netlify.app/)