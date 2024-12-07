##################################
# Stage 1: Build the application #
##################################

# Official Node.js runtime as the base image
FROM node:22-alpine as builder

# Set the working directory in the container
WORKDIR /app

# Copy all project files, except those excluded in .dockerignore
COPY . .

# Install dependencies
RUN npm install

# Declare a build-time variable
ARG VITE_API_URL
# Set the environment variable inside the container during the build
ENV VITE_API_URL=${VITE_API_URL}

# Build the application
RUN npm run build

###################################################
# Stage 2: Serve the built application with Nginx #
###################################################

# Official Nginx image as the base image
FROM nginx:alpine

# Copy the built files from the previous stage
# for create-react-app:
# COPY --from=build /app/build /usr/share/nginx/html
# for vite:
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Run Niginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
