# Use the official Node.js 18 image on Alpine Linux (smaller size)
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for Docker layer caching)
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (React dev server)
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
