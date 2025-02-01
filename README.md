# Multi-Environment Dockerized Node.js App

## 📝 App Description
This project is a containerized Node.js application designed to work in both **development** and **production** environments. It leverages **MongoDB**, **PostgreSQL**, **Redis**, and **NGINX** services, orchestrated using Docker Compose. The app uses Express.js for the backend API and provides a robust setup for modern web development.

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
