FROM node:12.19.0
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
CMD [ "node", "server.js" ]