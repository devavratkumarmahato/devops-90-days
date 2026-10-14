# Dockerized Microservices Application

A full-stack task management app built with Docker microservices. Each service runs in its own container and communicates over an isolated Docker network.

## Architecture

| Service | Technology | Port | Purpose |
|---------|-----------|------|---------|
| Frontend | React | 3000 | User interface |
| Backend | Node.js + Express | 5000 | REST API |
| Database | PostgreSQL | 5432 | Persistent data storage |
| Cache | Redis | 6379 | In-memory caching layer |
| Proxy | Nginx | 80 | Reverse proxy + routing |

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/docker-microservices.git
cd docker-microservices

# Build and start all services
docker compose up --build

# Open in your browser
http://localhost
```

## Stop Everything

```bash
# Stop and remove containers
docker compose down

# Stop and delete all data (including database volume)
docker compose down -v
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | List all tasks |
| POST | /api/tasks | Create a new task |
| DELETE | /api/tasks/:id | Delete a task by ID |
| GET | /health | Backend health check |

## Project Structure

```
docker-microservices/
├── docker-compose.yml      # Orchestrates all 5 services
├── .env                    # Environment variables (never commit this)
├── .gitignore              # Files to exclude from git
├── nginx/                  # Reverse proxy configuration
│   ├── Dockerfile
│   └── nginx.conf
├── frontend/               # React application
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   └── src/
├── backend/                # Node.js API
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── init.sql            # Database initialization script
└── docs/                   # Documentation
```

## What I Learned

- Docker image building and layer caching
- Docker Compose multi-service orchestration
- Container networking with custom bridge networks
- Reverse proxy configuration with Nginx
- Health checks and service dependency management
- Volume persistence for databases
- Cache invalidation strategies with Redis
- Environment variable management across services

## License

MIT
