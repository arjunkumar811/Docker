# Use Node.js 16 with Alpine Linux as base image
FROM node:16-alpine

# Set working directory inside container
WORKDIR /app

# Copy all files from current directory to container
COPY . .

# Install dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Command to run when container starts
CMD ["node", "index.js"]