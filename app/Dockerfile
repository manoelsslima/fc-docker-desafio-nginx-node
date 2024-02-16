FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN echo "Dockerfile do app"

EXPOSE 3000

CMD [ "node", "index.js" ]