# Multi-Environment Dockerized Node.js App

## 📝 App Description
This project is a containerized Node.js application designed to work in both **development** and **production** environments. It leverages **MongoDB**, **PostgreSQL**, **Redis**, and **NGINX** and **mongo-express** services, orchestrated using Docker Compose. The app uses Express.js for the backend API and provides a robust setup for modern web development.

---

## 📂 Project Structure

```plaintext
/project
|-- /src
|   |-- /config
|   |   |-- development.env       # Development environment variables
|   |   |-- production.env        # Production environment variables
|   |   |-- index.js              # Configuration loader
|   |-- /services
|   |   |-- mongo.js              # MongoDB connection
|   |   |-- postgres.js           # PostgreSQL connection with TypeORM
|   |   |-- redis.js              # Redis connection
|   |-- index.js                  # Main server file
|   |-- routes.js                 # Routes configuration
|-- Dockerfile                    # Multi-stage Docker build file
|-- docker-compose.yml            # Common Docker Compose file
|-- docker-compose.prod.yml       # Production-specific Docker Compose
|-- docker-compose.dev.yml        # Development-specific Docker Compose
|-- .env                          # Environment variables loader

## 🛠️ Services Overview

| Service        | Description                                   | Image                                                                                          |
| -------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Node.js**    | Backend application using Express.js          | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white)        |
| **MongoDB**    | NoSQL database                                | ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white)          |
| **PostgreSQL** | Relational database                           | ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white) |
| **Redis**      | In-memory cache                               | ![Redis](https://img.shields.io/badge/-Redis-DC382D?logo=redis&logoColor=white)                |
| **NGINX**      | Reverse proxy and load balancer in production | ![NGINX](https://img.shields.io/badge/-NGINX-269539?logo=nginx&logoColor=white)                |


