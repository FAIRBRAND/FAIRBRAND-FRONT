# 1- Use an official Node.js image
FROM node:18-alpine

# 2- Set the working directory inside the container
WORKDIR /src/app

# 3- Copy package.json and package-lock.json into the container
COPY package.json package-lock.json* ./

# 4- Install dependencies
RUN npm install

# 5- Copy the rest of the application code into the container
COPY . .

# 6- Build the application
RUN npm run build

# 7- Expose the port the app will run on
EXPOSE 3001

# 8- Start the app in production mode
CMD ["npm", "start"]