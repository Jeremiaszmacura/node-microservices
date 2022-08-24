FROM node:latest

WORKDIR /workspace/backend

COPY backend/package*.json ./

RUN npm install

COPY backend/ /workspace/backend/

RUN ["chmod", "+x", "/workspace/backend/sleep.sh"]

CMD ["node", "src/server.js"]