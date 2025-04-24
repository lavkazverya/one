FROM node:18-alpine

WORKDIR /app

# Install dependencies before copying all files for caching
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Expose the port for the dev server
EXPOSE 3000

CMD ["npm", "start"]
