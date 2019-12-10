FROM node:latest

WORKDIR /rest-api-scaffold
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
