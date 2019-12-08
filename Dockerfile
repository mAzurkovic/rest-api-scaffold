FROM node:latest

WORKDIR /rest-api-scaffold
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
