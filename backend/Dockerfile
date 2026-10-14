# Use the official Node.js 18 image on Alpine Linux (smaller size)
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
# This leverages Docker's layer caching - dependencies only reinstall if package.json changes
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5000 so other containers can reach this service
EXPOSE 5000

# Command to start the application
CMD ["node", "server.js"]
