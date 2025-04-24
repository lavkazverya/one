# Stage 1: Base image with Node
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Development
FROM base AS dev
COPY . .
ENV CHOKIDAR_USEPOLLING=true
CMD ["npm", "start"]

# Stage 3: Production build
FROM base AS build
COPY . .
RUN npm run build

# Stage 4: Serve production build
FROM nginx:alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
