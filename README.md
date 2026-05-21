# Student Task Manager API

This project is a Node.js Express application developed for the SIT753 Jenkins DevOps Pipeline task.

## Features

- View all student tasks
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Health check endpoint
- Prometheus metrics endpoint
- Docker container deployment
- Jenkins CI/CD pipeline

## Technologies Used

- Node.js
- Express.js
- Jest
- Supertest
- Docker
- Jenkins
- SonarQube configuration
- npm audit
- Prometheus client

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Checks if API is running |
| GET | /health | Health check endpoint |
| GET | /metrics | Monitoring metrics |
| GET | /tasks | View all tasks |
| POST | /tasks | Create new task |
| PUT | /tasks/:id/complete | Mark task as complete |
| DELETE | /tasks/:id | Delete task |

## Jenkins Pipeline Stages

1. Build
2. Test
3. Code Quality
4. Security Scan
5. Docker Build
6. Deploy
7. Release
8. Monitoring