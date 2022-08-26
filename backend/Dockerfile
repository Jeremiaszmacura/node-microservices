FROM node:latest

WORKDIR /workspace/backend

COPY --chown=node:node backend/package*.json ./

RUN npm install

COPY --chown=node:node backend/ /workspace/backend/

USER node

RUN ["chmod", "+x", "/workspace/backend/sleep.sh"]

CMD ["node", "src/server.js"]