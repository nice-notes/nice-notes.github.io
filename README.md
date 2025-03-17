# Nice Notes

A Next.js application containerized with Docker.

## Docker Setup

This project includes Docker configuration for both production and development environments.

### Prerequisites

- Docker
- Docker Compose

### Running in Production Mode

To build and run the application in production mode:

```bash
# Build and start the container
docker-compose up --build web

# Or run in detached mode
docker-compose up --build -d web
```

The application will be available at http://localhost:3000.

### Running in Development Mode

To run the application in development mode with hot reloading:

```bash
# Build and start the development container
docker-compose up --build dev
```

The application will be available at http://localhost:3000 with hot reloading enabled.

### Stopping the Containers

```bash
# Stop the containers
docker-compose down
```

## Manual Build

If you prefer not to use Docker, you can run the application directly:

```bash
# Install dependencies
pnpm install

# Run in development mode
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Environment Variables

Create a `.env` file in the root directory for environment variables:

```
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.example.com
```

## License

[MIT](LICENSE) 