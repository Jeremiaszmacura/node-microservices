FROM node:latest

WORKDIR /workspace/server

COPY package*.json ./

RUN npm install

COPY . /workspace/server

RUN ["chmod", "+x", "/workspace/server/sleep.sh"]

CMD ["node", "src/server.js"]