# Official Node.js runtime as the base image
FROM node:22-alpine

# Set working directory in the container
WORKDIR /app

# Copy server package files and source
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Install dependencies and build
RUN npm install
RUN npm run build

# Expose port 3000 for the server
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
