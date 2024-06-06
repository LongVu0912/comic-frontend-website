# Build stage
FROM node:20-alpine as BUILD_IMAGE
WORKDIR /app/react-app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy other source code and build
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine as PRODUCTION_IMAGE
WORKDIR /app/react-app

# Copy build files and necessary config files
COPY --from=BUILD_IMAGE /app/react-app/dist /app/react-app/dist
COPY package.json vite.config.js ./

RUN npm install vite

# Expose port and run the app
EXPOSE 80
CMD ["npm", "run", "preview"]