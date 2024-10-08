# Production Dockerfile

# First stage: Build the application
FROM node:22-alpine as builder

WORKDIR /app

# Copy package.json and package-lock.json files first
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

# Build application
RUN npm run build

# Second stage: Setup the production image
FROM node:22-alpine

# Copy built assets from the builder stage to production image
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Run the server
CMD ["node", "dist/server.js"]

EXPOSE 8080