# Stage 1: Build the application
FROM node:20 as build

# Set the working directory in the build container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .
ENV VITE_HA_URL=http://192.168.86.28:8123
# Build the application
RUN npm run build

# Stage 2: Serve the application using a lightweight web server
FROM nginx:alpine

# Copy the build output from the previous stage to the nginx html directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose the port nginx will run on
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
