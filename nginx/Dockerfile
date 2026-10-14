# Use the official Nginx image on Alpine Linux (lightweight, secure)
FROM nginx:alpine

# Replace the default Nginx configuration with our custom one
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Nginx runs automatically as the main process when the container starts
# (no CMD needed - the base image already has it)
