# Stage 1: MongoDB Service
FROM mongo
# Add any additional configuration or setup instructions for MongoDB if needed

# Stage 2: Application Service
FROM node:14
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables, if needed
# ENV ENV_VARIABLE_NAME value

# Expose port(s) if needed
# EXPOSE port_number

# Build the application, if required
# RUN npm run build

# Set the command to start the application
CMD ["npm", "start"]
