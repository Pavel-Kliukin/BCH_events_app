FROM node:14

WORKDIR /app

# Copy server dependencies
COPY server/package.json server/package-lock.json ./server/

# Copy client dependencies
COPY client/package.json client/package-lock.json ./client/

# Install server dependencies
WORKDIR /app/server
RUN npm install

# Install client dependencies
WORKDIR /app/client
RUN npm install

# Copy the rest of the application code
WORKDIR /app
COPY . .

# Build the client
WORKDIR /app/client
RUN npm run build

# Set the working directory to the server
WORKDIR /app/server

# Expose the port the server will listen on
EXPOSE 4000

# Start the server
CMD ["npm", "start"]
