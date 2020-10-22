FROM node:12-slim

WORKDIR /usr/src/app/

COPY . .

WORKDIR /usr/src/app/client

RUN npm install && npm run build INLINE_RUNTIME_CHUNK=false

WORKDIR /usr/src/app/

RUN npm install

CMD [ "npm", "run","server" ]
